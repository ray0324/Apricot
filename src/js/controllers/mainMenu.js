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

    var apricot_menu = JSON.parse(localStorage.getItem('apricot_menu'));
    if(  apricot_menu && apricot_menu.length > 0) {
      var _apricot_menu = utils.parseMenu(apricot_menu);
      // localStorage.setItem('apricot_menu', JSON.stringify(apricot_menu));
      app.data.menu = _apricot_menu.map(function (menu) {
        return {
          name: menu[menu_key],
          link: menu.PROG_ID,
          icon: menu.ICON
        }
      });
      resolve({
        componentUrl: './pages/panel-left.html',
      })
      return;
    }

    app.request.json(app.data.menuUrl, function (data) {
      var apricot_menu = utils.parseMenu(data);
      app.data.menu = apricot_menu.map(function (menu) {
        return {
          name: menu[menu_key],
          link: menu.PROG_ID,
          icon: menu.ICON
        }
      });
      resolve({
        componentUrl: './pages/panel-left.html',
      })
    })
  }
});