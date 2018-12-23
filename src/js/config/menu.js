define(function (require) {
  return {
    menu_keys: {
      zh_cn: 'MENU_NM_CN', // 简体中文
      en: 'MENU_NM_EN', // 英语
      zh_hk: 'MENU_NM_ZH' // 繁体中文
    },
    menu_links:{
      'main.html': '/', // 主页
      'sysSearch.html?srh_typ=C': '/clients/', // 客户
      'settings.html': '/settings/', // 设置
      'index.html': '/logout/', // 登出
    },
    menu_icons: {
      'main.html': 'home', // 主页
      'sysSearch.html?srh_typ=C': 'persons', // 客户
      'sysSearch.html?srh_typ=F': 'data_fill',
      'sysSearch.html?srh_typ=N': 'share',
      'sysSearch.html?srh_typ=Q': 'compose',
      'sysSearch.html?srh_typ=P': 'document_text',
      'sysSearch.html?srh_typ=R': 'star',
      // 'sysSearch.html?srh_typ=C': 'collection',
      'sysSearch.html?srh_typ=s': 'bars_chart',
      'sysSearch.html?srh_typ=D': 'calendar',
      'index.html': 'logout',
      'settings.html': 'gear', // 设置
    }
  }
})