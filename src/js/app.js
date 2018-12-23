
define(function (require) {
  var routes = require('./routes');
  var Framework7 = require('../lib/framework7');

  Template7.registerHelper('pluralize', function (arr, options) {
    if (!arr) return '';
    if (typeof arr === "number") return (arr < 2) ? options.hash.single : options.hash.multiple;
    return (arr.length === 1) ? options.hash.single : arr.length + " " + options.hash.multiple;
  });

  // Template 7 Register partial
  Template7.registerPartial(
    'comments',
    '{{#each comments}}' +
    '<div class="message message-first message-last message-tail{{#js_if "@index%2 === 0"}} message-sent{{else}} message-received{{/js_if}}">' +
    '<div class="message-content">' +
    '<div class="message-name">{{user}}, {{time_ago}}</div>' +
    '<div class="message-bubble">' +
    '<div class="message-text">{{content}}</div>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '{{#if comments}}{{> "comments"}}{{/if}}' +
    '{{/each}}'
  );

  var app = new Framework7({
    root: '#app', // App root element
    id: 'io.framework7.hackernews7', // App bundle ID
    name: 'HackerNews7', // App name
    language: localStorage.getItem('language') || 'zh_hk',
    theme: 'md', // Automatic theme detection
    clicks: {
      externalLinks: '.external, .message a', //external links also in comments
    },
    routes: routes, // App routes
    data: function () {
      return {
        menuUrl: 'https://apps.gogoins.com/~mass1810/json_menu.php',
        clientsUrl: 'https://apps.gogoins.com/~mass1810/json_search.php', // 客户列表 搜索
        addClientUrl: 'http://apricot1.gogoins.com/~mass1810/json_cstmr.php', // 添加客户
        api: null,
        menu: []
      }
    },
    methods: {
      // 客户列表
      fetchClients: function(params, cb){
        this.request.post(this.data.clientsUrl, params, function(list) {
          cb(JSON.parse(list));
        })
      },
      // 添加客户
      addClient: function(params, cb){
        this.request.post(this.data.addClientUrl, params, function(list) {
          cb(JSON.parse(list));
        })
      },
    },
  });

  return app;
})