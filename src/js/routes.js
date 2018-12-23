define(function (require) {
  var mainMenu = require('./controllers/mainMenu');
  return [
    {
      path: '/',
      componentUrl: './pages/home.html',
    },
    {
      path: '/panel-left/',
      async: mainMenu
    },
    {
      path: '/clients/',
      componentUrl: './pages/clients.html',
    },
    {
      path: '/add-client',
      componentUrl: './pages/add-client.html',
    },
    {
      path: '/update-client',
      componentUrl: './pages/update-client.html',
    },
    {
      path: '/login/',
      url: './pages/login.html',
    },
    {
      path: '/empty/',
      url: './pages/empty.html',
    },
    {
      path: '/settings/',
      componentUrl: './pages/settings.html',
    },
    {
      path: '/about/',
      url: './pages/about.html',
    },
    {
      path: '/iframe/:url/',
      componentUrl: './pages/iframe.html',
    },

    {
      path: '/logout',
      async: function(){
        localStorage.clear();
        location.reload();
      }
    },
    {
      path: '(.*)',
      url: './pages/404.html',
    },
  ];
})