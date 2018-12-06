
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
        apiUrl: "https://api.hnpwa.com/v0/",
        menuUrl: 'https://apps.gogoins.com/mass/json_menu.php',
        clientsUrl: 'https://apps.gogoins.com/mass/json_search.php',
        api: null,
        menu: []
      }
    },
    methods: {
      fetchAPI: function () {
        var self = this;
        this.request.json(this.data.apiUrl, function(api){
          self.data.api = api;
        })
      },
      // 客户列表
      fetchClients: function(cb){

        this.request.json(this.data.clientsUrl, function(list) {
          cb(list);
        })
      }
    },
  });

  return app;
})