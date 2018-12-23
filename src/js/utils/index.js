define(function (require) {
  'use strict';
  var menuConf = require('../config/menu');

  // 处理左侧菜单
  var parseMenu = function (menuList) {
    var menu_links = menuConf.menu_links;
    var menu_icons = menuConf.menu_icons;
    console.log(menu_icons);
    return menuList.map(function (menu) {
      menu.ICON = menu_icons[menu.PROG_ID] || '';
      menu.PROG_ID = menu_links[menu.PROG_ID] || '/404';
      return menu;
    })
  }

  return {
    parseMenu: parseMenu
  }

});