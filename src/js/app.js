
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
  theme: 'auto', // Automatic theme detection
  clicks: {
    externalLinks: '.external, .message a', //external links also in comments
  },
  routes: routes, // App routes
  data() {
    return {
      apiUrl: "https://api.hnpwa.com/v0/",
      api: null
    }
  },
  methods: {
    fetchAPI() {
      var self = this;
      self.request.json(self.data.apiUrl, (api) => {
        self.data.api = api
      })
    },

  },
  // panel: {
  //   leftBreakpoint: 960,
  // }
});

// Add Right/Main View
var mainView = app.views.create('.view-main', {
  url: '/'
});

// Add Right/Main View
var leftView = app.views.create('#panel-left-view', {
  url: '/panel-left/',
  linksView: '.view-main'
});

// var loginView = app.views.create('#login-view', {
//   url: '/login/'
// });

if (localStorage.getItem('hn7-api')) {
  app.loginScreen.close('#login');
}

var $$ = Dom7;

 $$('#login .login-button').on('click', function () {
   var username = $$('#login [name="username"]').val();
   var password = $$('#login [name="password"]').val();
  // console.log(app);

   // Close login screen
  app.loginScreen.close('#login');



   // Alert username and password
   app.dialog.alert('Username: ' + username + '<br>Password: ' + password);
 });

// app.loginScreen.open('#login');
  // splitView mode
  // if (!app.panel.left.opened) delete leftView.params.linksView;
