define(function (require) {
  var utils = require('./utils/index');
  var menuConf = require('./config/menu');
  return [
    {
      path: '/',
      url: './pages/home.html',
    },
    {
      path: '/panel-left/',
      async: function (routeTo, routeFrom, resolve, reject) {
        var app = this.app;
        // 获取语言
        var menu_key = menuConf.menu_keys[app.language];
        var apricot_menu_local = JSON.parse(localStorage.getItem('apricot_menu'));

        if (apricot_menu_local) {
          app.data.menu = apricot_menu_local.map(function(menu){
            return {
              name: menu[menu_key],
              link: menu.PROG_ID
            }
          });
          resolve({
            componentUrl: './pages/panel-left.html',
          });
          return;
        }

        app.request.json(app.data.menuUrl, function (data) {
          console.log(data.code);
          if(data.code != 0){
            localStorage.removeItem('apricot_token');
            localStorage.removeItem('apricot_menu');
            location.reload();
            return;
          }
          var apricot_menu = utils.parseMenu(data.results);
          localStorage.setItem('apricot_menu', JSON.stringify(apricot_menu));
          app.data.menu = apricot_menu.map(function(menu){
            return {
              name: menu[menu_key],
              link: menu.PROG_ID
            }
          });

          console.log(app.data);
          resolve({
            componentUrl: './pages/panel-left.html',
          })
        })
      }
    },
    {
      path: '/clients/',
      componentUrl: './pages/clients.html'
      // url: './pages/clients.html',
    },
    {
      path: '/abc',
      async: function (routeTo, routeFrom, resolve, reject) {
        var self = this;
        var app = self.app;

        // Get hnapi data
        if (app.data.api = JSON.parse(localStorage.getItem('hn7-api'))) {
          resolve({
            componentUrl: './pages/stories.html',
          })
        } else {
          app.request.json(app.data.apiUrl, function (data) {
            app.data.api = data;
            localStorage.setItem('hn7-api', JSON.stringify(data));
            resolve({
              componentUrl: './pages/stories.html',
            })
          })
        }
      }
    },

    {
      path: '/login/',
      url: './pages/login.html',
    },
    {
      path: '/empty/',
      url: './pages/empty.html',
    },
    {
      path: '/about/',
      url: './pages/about.html',
    },
    {
      path: '/story/:id/',
      componentUrl: './pages/story.html',
    },
    // Default route (404 page). MUST BE THE LAST
    {
      path: '(.*)',
      url: './pages/404.html',
    },
  ];
})