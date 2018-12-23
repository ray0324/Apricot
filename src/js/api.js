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


