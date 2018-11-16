define(function (require) {
  var mainMenu = require('./controllers/mainMenu');
  return [
    {
      path: '/',
      url: './pages/home.html',
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
      path: '/login/',
      url: './pages/login.html',
    },
    {
      path: '/empty/',
      url: './pages/empty.html',
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
      path: '/story/:id/',
      componentUrl: './pages/story.html',
    },
    {
      path: '(.*)',
      url: './pages/404.html',
    },
  ];
})