// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic','ionic.service.core', 'ngCordova', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.categories', {
    url: '/categories',
    views: {
      'menuContent': {
        templateUrl: 'templates/categories.html',
        controller: 'categoryCtrl'
      }
    }
  })


    .state('app.itemsList', {
      url: '/itemsList',
      views: {
        'menuContent': {
          templateUrl: 'templates/itemsList.html',
          controller: 'itemsCrtl'
        }
      }
    })
    .state('app.item', {
      url: '/item',
      views: {
        'menuContent': {
          templateUrl: 'templates/item.html',
          controller: 'itemCrtl'
        }
      }
    })
    .state('app.mylist', {
      url: '/mylist',
      views: {
        'menuContent': {
          templateUrl: 'templates/mylist.html'
        }
      }
    })
    .state('app.search', {
      url: '/search',
      views: {
        'menuContent': {
          templateUrl: 'templates/search.html'
        }
      }
    })
    .state('app.aboutus', {
      url: '/aboutus',
      views: {
        'menuContent': {
          templateUrl: 'templates/aboutus.html'
        }
      }
    })
  //.state('app.single', {
  //  url: '/playlists/:playlistId',
  //  views: {
  //    'menuContent': {
  //      templateUrl: 'templates/playlist.html',
  //      controller: 'PlaylistCtrl'
  //    }
  //  }
  //});
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/categories');
});
