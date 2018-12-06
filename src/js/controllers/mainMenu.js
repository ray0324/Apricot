define(function (require) {
  var utils = require('../utils/index');
  var menuConf = require('../config/menu');

  return function (routeTo, routeFrom, resolve, reject) {
    var app = this.app;
    // 获取语言
    var menu_key = menuConf.menu_keys[app.language];
    // var apricot_menu_local = JSON.parse(localStorage.getItem('apricot_menu'));

    // if (apricot_menu_local) {
    //   app.data.menu = apricot_menu_local.map(function (menu) {
    //     return {
    //       name: menu[menu_key],
    //       link: menu.PROG_ID
    //     }
    //   });
    //   resolve({
    //     componentUrl: './pages/panel-left.html',
    //   });
    //   return;
    // }

    app.request.json(app.data.menuUrl, function (data) {
      console.log(data.code);
      // if (data.code != 0) {
      //   localStorage.removeItem('apricot_token');
      //   localStorage.removeItem('apricot_menu');
      //   location.reload();
      //   return;
      // }
      var apricot_menu = utils.parseMenu(data.results);
      // localStorage.setItem('apricot_menu', JSON.stringify(apricot_menu));
      app.data.menu = apricot_menu.map(function (menu) {
        return {
          name: menu[menu_key],
          link: menu.PROG_ID
        }
      });

      // console.log(app.data);
      resolve({
        componentUrl: './pages/panel-left.html',
      })
    })
  }
});