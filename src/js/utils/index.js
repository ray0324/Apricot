define(function (require) {
  'use strict';
  var menuConf = require('../config/menu');

  // 处理左侧菜单
  var parseMenu = function (menuList) {
    var menu_links = menuConf.menu_links;
    return menuList.map(function (menu) {
      menu.PROG_ID = menu_links[menu.PROG_ID] || '/404';
      return menu;
    })
  }

  return {
    parseMenu: parseMenu
  }

});