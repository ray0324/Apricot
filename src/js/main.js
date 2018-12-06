define(function (require) {
  'use strict';
  var app = require('./app');
  var $ = Dom7;

  $('#app').addClass('color-theme-' + (localStorage.getItem('theme_color')||'black'));

  if (!localStorage.getItem('token_flag')) {
    $('#login-screen').show();
    app.swiper.create('#login-swiper', {
      pagination: {
        el: '.swiper-pagination',
      },
    });
    app.loginScreen.create('#login-screen');

  } else {
    app.loginScreen.close('#login-screen');
    var mainView = app.views.create('.view-main', { url: '/' });
    // Add Right/Main View
    var leftView = app.views.create('#panel-left-view', {
      url: '/panel-left/',
      linksView: '.view-main'
    });
  }

  $('#login-screen .login-button').on('click', function () {
    var username = $('#login-screen [name="username"]').val();
    var password = $('#login-screen [name="password"]').val();
    var token_flag = $('#login-screen [type="checkbox"]').is(":checked");

    if (token_flag) {
      localStorage.setItem('token_flag', 1);
    }

    app.request.json('https://apps.gogoins.com/mass/json_login.php', function (res) {
      if (res.code !== 0) {
        app.dialog.alert(res.message);
        return;
      }
      localStorage.setItem('apricot_token', res.jsessionid)
      app.loginScreen.close('#login-screen');
      // Add Right/Main View
      var mainView = app.views.create('.view-main', {
        url: '/'
      });

      // add left view
      var leftView = app.views.create('#panel-left-view', {
        url: '/panel-left/',
        linksView: '.view-main'
      });

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