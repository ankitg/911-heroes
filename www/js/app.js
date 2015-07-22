// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','avatar.controller'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider


  /*  *\
    Abstract State: Main
  \*  */
  .state('main', {
    abstract: true,
    views:  {
      '': {
        templateUrl: 'index.html'
        //,
        //controller: 'MainCtrl'
      }
    }
  })
  /*  *\
    Login
  \*  */
  .state('main.login', {
    url: '/login',
    views: {
      '@main': {
        templateUrl: 'views/login.html',
        resolve: {
        },
        controller: 'LoginCtrl'
      }
    }
  })
  /*  *\
    Start
  \*  */
  .state('main.start', {
    url: '/start',
    views: {
      '@main': {
        templateUrl: 'views/start.html',
        resolve: {
        },
        controller: 'StartCtrl'
      }
    }
  })
  /*  *\
    Avatar
  \*  */
  .state('main.avatar', {
    url: '/avatar',
    views: {
      '@main': {
        templateUrl: 'views/avatar.html',
        resolve: {
        },
        controller: 'AvatarCtrl'
      }
    }
  })
  /*  *\
    Video
  \*  */
  .state('main.video', {
    url: '/video',
    views: {
      '@main': {
        templateUrl: 'views/video.html',
        resolve: {
        },
        controller: 'VideoCtrl'
      }
    }
  })
  /*  *\
    Module1
  \*  */
  .state('main.module1', {
    url: '/module1',
    views: {
      '@main': {
        templateUrl: 'views/module1.html',
        resolve: {
        },
        controller: 'Module1Ctrl'
      }
    }
  })
  /*  *\
    Module2
  \*  */
  .state('main.module2', {
    url: '/module2',
    views: {
      '@main': {
        templateUrl: 'views/module2.html',
        resolve: {
        },
        controller: 'Module2Ctrl'
      }
    }
  })
  /*  *\
    Module3
  \*  */
  .state('main.module3', {
    url: '/module3',
    views: {
      '@main': {
        templateUrl: 'views/module3.html',
        resolve: {
        },
        controller: 'Module3Ctrl'
      }
    }
  })
  /*  *\
    LevelUp
  \*  */
  .state('main.levelUp', {
    url: '/levelUp',
    views: {
      '@main': {
        templateUrl: 'views/levelUp.html',
        resolve: {
        },
        controller: 'LevelUpCtrl'
      }
    }
  })
  /*  *\
    TimeOut
  \*  */
  .state('main.timeOut', {
    url: '/timeOut',
    views: {
      '@main': {
        templateUrl: 'views/timeOut.html',
        resolve: {
        },
        controller: 'TimeOutCtrl'
      }
    }
  })
  /*  *\
    TryAgain
  \*  */
  .state('main.tryAgain', {
    url: '/tryAgain',
    views: {
      '@main': {
        templateUrl: 'views/tryAgain.html',
        resolve: {
        },
        controller: 'TryAgainCtrl'
      }
    }
  })
  /*  *\
    Final
  \*  */
  .state('main.final', {
    url: '/final',
    views: {
      '@main': {
        templateUrl: 'views/final.html',
        resolve: {
        },
        controller: 'FinalCtrl'
      }
    }
  })
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/avatar');

});