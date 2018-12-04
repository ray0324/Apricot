/**
 *  约定返回的数据格式:
 * @returns code: 0 - 成功  负数-失败  -1000 表示session过期
 * @returns message: 成功或者失败原因
 */

Mock.setup({ timeout: '200-600' });

/**
 * 登录接口
 * url:https://apps.gogoins.com/mass/json_login.php
 * @param oper_id 邮箱地址
 * @param pswd 用户密码
 */
Mock.mock('https://apps.gogoins.com/mass/json_login.php', {
  'code': 0,
  'message': '请求成功',
  'jsessionid': /\w{16}/, // token字符串
})

/**
 * 修改密码
 * url: 'https://apps.gogoins.com/mass/json_reset.php'
 * @param token jsessionid 标识用户信息的sessionID
 * @param oldpassworld 旧密码
 * @param newpassworld 新密码
 */
Mock.mock('https://apps.gogoins.com/mass/json_reset.php', {
  'code': 0,
  'message': '请求成功',
})

/**
 * 获取主菜单列表
 * @param token 标识用户信息的sessionID
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
    },
    {
      "MENU_NM_EN": "Settings",
      "MENU_NM_CN": "设置",
      "MENU_NM_ZH": "设定",
      "PROG_ID": "settings.html"
    }
  ]
})

/**
 * 获取客户列表
 * @param token 标识用户信息的sessionID
 * url: ‘’
 */
Mock.mock('https://apps.gogoins.com/mass/json_search.php',{
  results: [
     {
       "REF1": "8021338",
       "REF2": "LEUNG PING KWAN",
       "REF3": "",
       "REF4": "",
       "REF5": "17A, WINNYE TOWER, KAU HUI CHIK ST., TAI PO, N.T.",
       "REF6": "",
       "REF7": "订单号码 : 318101222  日期： 2018-10-19<br>060111732018000840   HKD1,961"
     },
     {
       "REF1": "8017212",
       "REF2": "LEUNG WAI CHING",
       "REF3": "",
       "REF4": "",
       "REF5": "FLAT C, 13/F, BLOCK 62, STAGE 3, BROADWAY, MEI FOO SUN CHUEN, KOWLOON",
       "REF6": "",
       "REF7": "订单号码 : 318030329  日期： 2018-03-08<br>060111732018000208   HKD1,200"
     },
     {
       "REF1": "8008107",
       "REF2": "LEUNG CHING HANG ALAN",
       "REF3": "",
       "REF4": "",
       "REF5": "FLAT A, 17/F., WINNYE TOWER, KAU HUI CHIK STREET, TAI PO, N.T.",
       "REF6": "",
       "REF7": "订单号码 : 318031149  日期： 2018-03-26<br>060108512018002028   HKD0"
     },
     {
       "REF1": "8015982",
       "REF2": "LEUNG KIN HANG KENNETH",
       "REF3": "",
       "REF4": "",
       "REF5": "ROOM A, 17/F., WINNYE TOWER, KAU HUI CHIK STREET, TAI PO, N.T.",
       "REF6": "",
       "REF7": "订单号码 : 817120020  日期： 2017-12-06<br>20177568 DMO   HKD3,090"
     },
     {
       "REF1": "8015595",
       "REF2": "MANTONG INDUSTRIAL DEVELOPMENT CO. LTD",
       "REF3": "",
       "REF4": "",
       "REF5": "FLAT 16, 3/F, BLOCK A,  WAH TAT INDUSTRIAL CENTRE,  8 WAH SING STREET, KWAI CHUNG, N.T",
       "REF6": "",
       "REF7": ""
     },
     {
       "REF1": "8015309",
       "REF2": "CHAN SUK YEE CHRISTINE",
       "REF3": "",
       "REF4": "",
       "REF5": "2B, 62B ROBINSON ROAD, MID LEVELS, HONG KONG",
       "REF6": "",
       "REF7": "订单号码 : 617100025  日期： 2017-10-19<br>AH-68016006-DOMES   HKD688"
     },
     {
       "REF1": "8014282",
       "REF2": "WONG TIEN LEE TERESA",
       "REF3": "",
       "REF4": "",
       "REF5": "ROOM A5, 5/F., BLOCK A, CHEERFUL COURT, 55 CHOI HA ROAD, NGAU TAU KOK, KOWLOON",
       "REF6": "",
       "REF7": "订单号码 : 617090045  日期： 2017-09-25<br>AH-68015525-DOMES/E01   HKD0"
     },
     {
       "REF1": "8014481",
       "REF2": "LEUNG WAI CHING",
       "REF3": "",
       "REF4": "",
       "REF5": "FLAT C, 13/F, 62 BROADWAY, MEI FOO SUN CHUEN, KOWLOON",
       "REF6": "",
       "REF7": "订单号码 : 618030007  日期： 2018-03-02<br>AH-68015655-DOMES/E01   HKD0"
     },
     {
       "REF1": "2855580",
       "REF2": "LEUNG YUEN WAI WAN VIVIAN",
       "REF3": "",
       "REF4": "",
       "REF5": "ROOM A, 17/F., WINNYE TOWER, KAU HUI CHIK STREET, TAI PO, N.T.",
       "REF6": "",
       "REF7": "订单号码 : 318010196  日期： 2018-01-04<br>SDPVP17006192/E01   HKD-2,115"
     },
     {
       "REF1": "8011128",
       "REF2": "YUEN XERIF",
       "REF3": "",
       "REF4": "",
       "REF5": "ROOM 618, 4/F, RUBY COURT, NO. 618 KING`S ROAD, NORTH POINT, HONG KONG",
       "REF6": "",
       "REF7": "订单号码 : 317110637  日期： 2017-11-10<br>060111732017000469   HKD1,800"
     },
     {
       "REF1": "8010294",
       "REF2": "HUANG XIN",
       "REF3": "",
       "REF4": "",
       "REF5": "FLAT E, 17/F., MOUNT PARKER RESIDENCES, NO. 1 SAI WAN TERRACE, QUARRY BAY, HONG KONG",
       "REF6": "",
       "REF7": "订单号码 : 318081754  日期： 2018-08-30<br>SDPHG18003553   HKD2,476"
     },
     {
       "REF1": "4840827",
       "REF2": "KO WAI",
       "REF3": "",
       "REF4": "",
       "REF5": "FLAT C, 13/F., BLOCK 62, STAGE 3, BROADWAY, MEI FOO SUN CHUEN, KOWLOON",
       "REF6": "",
       "REF7": "订单号码 : 816100089  日期： 2016-10-28<br>LEM1501112148/E01   HKD-736"
     },
     {
       "REF1": "2809208",
       "REF2": "CHAN WAI HANG WILSON",
       "REF3": "",
       "REF4": "",
       "REF5": "FLAT G, 39/F., TOWER 2, ROBINSON PLACE, 70 RABINSON ROAD, MED-LEVELS, HONG KONG",
       "REF6": "",
       "REF7": "订单号码 : 317030347  日期： 2017-03-13<br>060111632017800186   HKD1,000"
     },
     {
       "REF1": "2884428",
       "REF2": "TONG SUK YUNG",
       "REF3": "",
       "REF4": "",
       "REF5": "ROOM B, 42/F., TOWER 1, RAMBLER CREST, TSING YI, N.T.",
       "REF6": "",
       "REF7": "订单号码 : 318030237  日期： 2018-03-07<br>060111732018000195   HKD3,251"
     },
     {
       "REF1": "2903325",
       "REF2": "YUEN WAI MING JOSEPHINE AND YUEN WAI PING HEIDI",
       "REF3": "",
       "REF4": "",
       "REF5": "3222 TUNG MAU HOUSE, LEI TUNG ESTATE, APLEICHAU, HONG KONG",
       "REF6": "",
       "REF7": "订单号码 : 318060371  日期： 2018-06-11<br>060113262018004826   HKD580"
     },
     {
       "REF1": "2903331",
       "REF2": "YUEN WAI PING HEIDI",
       "REF3": "",
       "REF4": "",
       "REF5": "4/F., RUBY COURT, 618 KING`S ROAD, NORTH POINT, H.K.",
       "REF6": "",
       "REF7": "订单号码 : 317120755  日期： 2017-12-18<br>060111732017000544   HKD1,800"
     },
     {
       "REF1": "2903339",
       "REF2": "YUEN WAI YEE ISABELLA / YUEN WAI PING",
       "REF3": "",
       "REF4": "",
       "REF5": "HEIDI / YUEN WAI MING JOSEPHINE  4/F., RUBY COURT,  618 KING`S ROAD,",
       "REF6": "",
       "REF7": "订单号码 : 318020833  日期： 2018-02-27<br>CANCEL BOOKING   HKD0"
     },
     {
       "REF1": "2875547",
       "REF2": "SILVER SPEED LTD.",
       "REF3": "",
       "REF4": "",
       "REF5": "B03, ISLAND PLACE, 500 KING`S RD., NORTH POINT, H.K.",
       "REF6": "",
       "REF7": "订单号码 : 414080075  日期： 2014-08-06<br>B4NSHP027315/E   HKD0"
     },
     {
       "REF1": "2856431",
       "REF2": "LI LUN FUNG THOMAS",
       "REF3": "",
       "REF4": "",
       "REF5": "1502 OLYMPIA PLAZA, 255 KING`S ROAD, NORTH POINT,",
       "REF6": "",
       "REF7": ""
     },
     {
       "REF1": "2810388",
       "REF2": "CHAN YUK MING VICTOR & JEANNIE WOO",
       "REF3": "",
       "REF4": "",
       "REF5": "FLAT D, 2/F, BLOCK 1, FLORA GARDEN, 7 CHUN FAI ROAD, JARDINES` LOOKOUT, HONG KONG",
       "REF6": "",
       "REF7": ""
     },
     {
       "REF1": "2903328",
       "REF2": "YUEN WAI PING",
       "REF3": "",
       "REF4": "",
       "REF5": "ROOM 618, 4/F., RUBY COURT, KING`S ROAD, NORTH POINT, H.K.",
       "REF6": "",
       "REF7": ""
     },
     {
       "REF1": "2859220",
       "REF2": "LO WAI MAN",
       "REF3": "",
       "REF4": "",
       "REF5": "ROOM 618, 4/F., RUBY COURT, KING`S ROAD, NORTH POINT, H.K.",
       "REF6": "",
       "REF7": ""
     },
     {
       "REF1": "2875545",
       "REF2": "SILVER SPEED LTD.",
       "REF3": "",
       "REF4": "",
       "REF5": "B03, ISLAND PLACE, 500 KING`S RD., NORTH POINT,",
       "REF6": "",
       "REF7": "订单号码 : 514070336  日期： 2014-07-11<br>1-B0057314-BPK   HKD5,066"
     },
     {
       "REF1": "2903579",
       "REF2": "YUNG CHEUK CHOI",
       "REF3": "",
       "REF4": "",
       "REF5": "ROOM 618, 4/F, RUBY COURT, 618 KING`S ROAD, NORTH POINT, HONG KONG",
       "REF6": "",
       "REF7": "订单号码 : 818010050  日期： 2018-01-09<br>20178773 DMO   HKD4,880"
     },
     {
       "REF1": "2875546",
       "REF2": "SILVER SPEED LTD.",
       "REF3": "",
       "REF4": "",
       "REF5": "SHOP 217, 1/F, METROPOLE INTER`LDEPT.STORES LTD. 416-426 KING`S RD., NORTH POINT, HK",
       "REF6": "",
       "REF7": ""
     },
     {
       "REF1": "2903326",
       "REF2": "YUEN WAI MING JOSEPHINE",
       "REF3": "",
       "REF4": "",
       "REF5": "4/F, RUBY COURT, 618 KING`S ROAD, NORTH POINT, HONG KONG",
       "REF6": "",
       "REF7": "订单号码 : 317120930  日期： 2017-12-20<br>060111012017004760   HKD660"
     },
     {
       "REF1": "2846630",
       "REF2": "LAM WING CHUI BONNIE",
       "REF3": "",
       "REF4": "",
       "REF5": "RM 304-305., 3/F., NO.625 KING`S ROAD, NORTH POINT, HONG KONG.",
       "REF6": "",
       "REF7": ""
     },
     {
       "REF1": "2903329",
       "REF2": "YUEN WAI PING HEIDI",
       "REF3": "",
       "REF4": "",
       "REF5": "ROOM 304, 3/F., NO.625 KING`S ROAD, NORTH POINT, HONG KONG.",
       "REF6": "",
       "REF7": ""
     },
     {
       "REF1": "2903324",
       "REF2": "YUEN WAI MING JOSEPHINE",
       "REF3": "",
       "REF4": "",
       "REF5": "ROOM 304, 3/F., NO.625 KING`S ROAD, NORTH POINT, HONG KONG.",
       "REF6": "",
       "REF7": ""
     },
     {
       "REF1": "2903338",
       "REF2": "YUEN WAI YEE ISABELLA",
       "REF3": "",
       "REF4": "",
       "REF5": "4/F, RUBY COURT, NO.618 KING`S ROAD, NORTH POINT, HONG KONG",
       "REF6": "",
       "REF7": "订单号码 : 317120931  日期： 2017-12-20<br>060111012017004762   HKD660"
     },
     {
       "REF1": "2806408",
       "REF2": "CHAN KIU HIN XERIF",
       "REF3": "",
       "REF4": "",
       "REF5": "ROOM 618, 4/F., RUBY COURT, NO 618 KING`S ROAD, NORTH POINT, HONG KONG",
       "REF6": "",
       "REF7": ""
     },
     {
       "REF1": "2858887",
       "REF2": "LO PAK CHEUNG",
       "REF3": "",
       "REF4": "",
       "REF5": "FLAT C, 25/F., BLOCK 6, HANFORD GARDEN, 333 CASTLE PEAK RD., TUEN MUN, N.T.",
       "REF6": "",
       "REF7": ""
     },
     {
       "REF1": "2862913",
       "REF2": "MAN TONG INDUSTRIAL CO.",
       "REF3": "",
       "REF4": "",
       "REF5": "ROOM 11 19/F, ASIA TRADE CENTRE, 79 LEI MUK ROAD, KWAI CHUNG, NEW TERRITORIES",
       "REF6": "",
       "REF7": ""
     },
     {
       "REF1": "2896966",
       "REF2": "WONG YUK LAN",
       "REF3": "",
       "REF4": "",
       "REF5": "FLAT 3, 21/F, BLOCK K, FANLING CENTRE, 33 SAN WAN ROAD, FANLING,",
       "REF6": "",
       "REF7": ""
     },
     {
       "REF1": "2844307",
       "REF2": "LAI WAI KWOK",
       "REF3": "",
       "REF4": "",
       "REF5": "ROOM 2, 7/F., BLOCK C, FANLING CENTRE, FANLING, NEW TERRITORIES.",
       "REF6": "",
       "REF7": "订单号码 : 415020136  日期： 2015-02-16<br>B5MPS000441M   HKD750"
     },
     {
       "REF1": "2870409",
       "REF2": "PARKER TECHNOLOGY (H.K.) COMPANY LIMITED",
       "REF3": "",
       "REF4": "",
       "REF5": "FLAT C, 25/F., BLOCK 6, HANFORD GARDEN, 333 GASTLE PEAK RD., TUEN MUN, N.T.",
       "REF6": "",
       "REF7": ""
     },
     {
       "REF1": "2896592",
       "REF2": "WONG YIK CHUN",
       "REF3": "",
       "REF4": "",
       "REF5": "PHAZE 3, BLOCK 41, 18/F., FLAT C, MEI FOO SUN CHUEN, KOWLOON.",
       "REF6": "",
       "REF7": ""
     },
     {
       "REF1": "2840239",
       "REF2": "KO WAI",
       "REF3": "",
       "REF4": "",
       "REF5": "FLAT C, 13/F., BLK.62, STAGE 3, BROADWAY, MEI FOO SUN CHUEN, KLN.",
       "REF6": "",
       "REF7": "订单号码 : 618030006  日期： 2018-03-02<br>AH-68016742-DOMES   HKD1,299"
     },
     {
       "REF1": "2840196",
       "REF2": "KO SIU FAI",
       "REF3": "",
       "REF4": "",
       "REF5": "FLAT A, 13/F, BLOCK 60, STAGE 3, MEI FOO SUN CHUEN, KOWLOON.",
       "REF6": "",
       "REF7": ""
     },
     {
       "REF1": "2822937",
       "REF2": "DAVIDS CATERING CONSULTANCY",
       "REF3": "",
       "REF4": "",
       "REF5": "ROOM 1019A, NAN FUNG CENTRE, TSUEN WAN, N.T.",
       "REF6": "",
       "REF7": ""
     },
     {
       "REF1": "2854948",
       "REF2": "LEUNG WAI CHING",
       "REF3": "",
       "REF4": "",
       "REF5": "PHASE 3, BLOCK 60, 13/F., FLAT A, MEI FOO SUN CHUEN, KOWLOON.",
       "REF6": "",
       "REF7": ""
     },
     {
       "REF1": "2840094",
       "REF2": "KO KAM MING",
       "REF3": "",
       "REF4": "",
       "REF5": "1509, OLYMPIA PLAZA, NORTH POINT, H.K.",
       "REF6": "",
       "REF7": ""
     },
     {
       "REF1": "2841571",
       "REF2": "KWAN MAN WAI",
       "REF3": "",
       "REF4": "",
       "REF5": "UNIT 13-14, 9/F, WELLBORNE COMM, CTR., 8 JAVA ROAD, NORTH POINT, HONG KONG",
       "REF6": "",
       "REF7": ""
     },
     {
       "REF1": "2867949",
       "REF2": "NG YEE LAI ELI",
       "REF3": "",
       "REF4": "",
       "REF5": "FLAT C, 4/F., 38 LYTTELTON ROAD, HONG KONG.",
       "REF6": "",
       "REF7": ""
     },
     {
       "REF1": "2885856",
       "REF2": "TSANG WING YEE",
       "REF3": "",
       "REF4": "",
       "REF5": "NO. 7A, SUN DAY VILLAGE TSENG LAN SHU, CLEARWATER BAY ROAD, KOWLOON",
       "REF6": "",
       "REF7": ""
     },
     {
       "REF1": "2877146",
       "REF2": "SO NGA YEE GLADYS",
       "REF3": "",
       "REF4": "",
       "REF5": "FLAT E, 10/F., BLOCK 11, SERENITY PARK, TAI PO, NEW TERRITORIES.",
       "REF6": "",
       "REF7": ""
     },
     {
       "REF1": "2896821",
       "REF2": "WONG YUEN FONG",
       "REF3": "",
       "REF4": "",
       "REF5": "1512, HIN YEUNG HOUSE, HIN KENG ESTATE, TAI WAI, NEW TERRITORIES.",
       "REF6": "",
       "REF7": ""
     },
     {
       "REF1": "2893728",
       "REF2": "WONG KWONG WING",
       "REF3": "",
       "REF4": "",
       "REF5": "ROOM 3312, TSZ PING HOUSE, TIN TSZ ESTATE, TIN SHUI WAI,",
       "REF6": "",
       "REF7": "订单号码 : 816070071  日期： 2016-07-15<br>PHM1601105596   HKD580"
     },
     {
       "REF1": "2840045",
       "REF2": "KO DIK SHUN",
       "REF3": "",
       "REF4": "",
       "REF5": "FLAT A, 13/F., BLOCK 60, PHASE 3, MEI FOO SUN CHUEN, KOWLOON.",
       "REF6": "",
       "REF7": ""
     },
     {
       "REF1": "2835751",
       "REF2": "HUNG SAU KUEN CONNIE",
       "REF3": "",
       "REF4": "",
       "REF5": "FLAT A, 13/F., BLK.60, BROADWAY ST., MEI FOO SUN CHUEN, KLN.",
       "REF6": "",
       "REF7": "订单号码 : 317080498  日期： 2017-08-11<br>060111632017000237   HKD1,000"
     }
   ]}
 )


/**
 * 新增客户
 * @param token 标识用户信息的sessionID
 * url: ‘’
 */




