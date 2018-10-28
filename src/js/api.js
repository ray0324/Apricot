Mock.setup({ timeout: '200-600' });

/**
 * 登录接口
 */
Mock.mock('https://apps.gogoins.com/mass/json_login.php', {
  'code': 0,
  'message': '请求成功',
  'jsessionid': /\w{16}/,//这个定义数据的模板形式下面会介绍
})

/**
 * 修改密码
 */
Mock.mock('https://apps.gogoins.com/mass/json_reset.php', {
  'code': 0,
  'message': '请求成功',
})

/**
 * 获取主菜单
 */
Mock.mock('https://apps.gogoins.com/mass/json_menu.php', {
  'code': 0,
  'message': '请求成功',
  'results': [
    {
      "MENU_NM_EN": "Home",
      "MENU_NM_CN": "主页",
      "MENU_NM_ZH": "主頁",
      "PROG_ID": "main.html"
    },
    {
      "MENU_NM_EN": "Clients",
      "MENU_NM_CN": "客户",
      "MENU_NM_ZH": "客戶",
      "PROG_ID": "sysSearch.html?srh_typ=C"
    },
    {
      "MENU_NM_EN": "Clients",
      "MENU_NM_CN": "最新优惠",
      "MENU_NM_ZH": "最新優惠",
      "PROG_ID": "sysSearch.html?srh_typ=F"
    },
    {
      "MENU_NM_EN": "Pending Cases",
      "MENU_NM_CN": "待发保单",
      "MENU_NM_ZH": "待發保單",
      "PROG_ID": "sysSearch.html?srh_typ=N"
    },
    {
      "MENU_NM_EN": "Quotation",
      "MENU_NM_CN": "报价",
      "MENU_NM_ZH": "報價",
      "PROG_ID": "sysSearch.html?srh_typ=Q"
    },
    {
      "MENU_NM_EN": "Policy",
      "MENU_NM_CN": "生效保单",
      "MENU_NM_ZH": "生效保單",
      "PROG_ID": "sysSearch.html?srh_typ=P"
    },
    {
      "MENU_NM_EN": "Renewal",
      "MENU_NM_CN": "待续保单",
      "MENU_NM_ZH": "待續保單",
      "PROG_ID": "sysSearch.html?srh_typ=R"
    },
    {
      "MENU_NM_EN": "Claims",
      "MENU_NM_CN": "索偿个案",
      "MENU_NM_ZH": "索償個案",
      "PROG_ID": "sysSearch.html?srh_typ=C"
    },
    {
      "MENU_NM_EN": "Scoring",
      "MENU_NM_CN": "积分表",
      "MENU_NM_ZH": "積分表",
      "PROG_ID": "sysSearch.html?srh_typ=s"
    },
    {
      "MENU_NM_EN": "Dairy",
      "MENU_NM_CN": "日誌",
      "MENU_NM_ZH": "日誌",
      "PROG_ID": "sysSearch.html?srh_typ=D"
    },
    {
      "MENU_NM_EN": "Logout",
      "MENU_NM_CN": "登出",
      "MENU_NM_ZH": "登出",
      "PROG_ID": "index.html"
    }
  ]
})


