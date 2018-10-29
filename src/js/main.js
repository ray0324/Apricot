define(function(require,) {
  'use strict';
   var app = require('./app');



  // var loginView = app.views.create('#login-view', {
  //   url: '/login/'
  // });

  // if (localStorage.getItem('hn7-api')) {
  //   app.loginScreen.close('#login');
  // }

  var $$ = Dom7;

  if(localStorage.getItem('apricot_token')){
    app.loginScreen.close('#login');
    // Close login screen
    // app.loginScreen.close('#login');
    // Add Right/Main View
    var mainView = app.views.create('.view-main', {
      url: '/'
    });

    // Add Right/Main View
    var leftView = app.views.create('#panel-left-view', {
      url: '/panel-left/',
      linksView: '.view-main'
    });
  }

  $$('#login .login-button').on('click', function () {
    var username = $$('#login [name="username"]').val();
    var password = $$('#login [name="password"]').val();

        app.request.json('https://apps.gogoins.com/mass/json_login.php', function (data) {
          console.log(data)
          if(data.code !== 0){
            app.dialog.alert('登录失败');
            return;
          }
          localStorage.setItem('apricot_token',data.jsessionid)
          app.loginScreen.close('#login');
        })
    // Add Right/Main View
    var mainView = app.views.create('.view-main', {
      url: '/'
    });

    // Add Right/Main View
    var leftView = app.views.create('#panel-left-view', {
      url: '/panel-left/',
      linksView: '.view-main'
    });


    // Alert username and password
    // app.dialog.alert('Username: ' + username + '<br>Password: ' + password);
  });

  // app.on('panelOpen', function (panel) {
  //   console.log(panel)
  //   console.log('Panel ' + panel.side + ' opened');
  // });
  // app.on('panelClose', function (panel) {
  //   console.log(panel)
  //   console.log('Panel ' + panel.side + ' opened');
  // });


});