angular.module('911-heroes.controllers', [])

.controller('AvatarCtrl', function($scope) {

  $scope.avatars = [ 
    {
      name: 'boy 1',
      image: '../img/boy1/boy1_0.svg',
    },
    {
      name: 'boy 2',
      image: '../img/boy2/boy2_0.svg',
    },
    {
      name: 'boy 3',
      image: '../img/boy3/boy3_0.svg',
    },
    {
      name: 'boy 4',
      image: '../img/boy4/boy4_0.svg',
    },
    {
      name: 'boy 5',
      image: '../img/boy5/boy5_0.svg',
    },
    {
      name: 'girl 1',
      image: '../img/girl1/girl1_0.svg',
    },
    {
      name: 'girl 2',
      image: '../img/girl2/girl2_0.svg',
    },
    {
      name: 'girl 3',
      image: '../img/girl3/girl3_0.svg',
    },
    {
      name: 'girl 4',
      image: '../img/girl4/girl4_0.svg',
    },
    {
      name: 'girl 5',
      image: '../img/girl5/girl5_0.svg',
    },
    {
      name: 'girl 6',
      image: '../img/girl6/girl6_0.svg'
    }
  ];

  $scope.selectedAvatar = {name:"no_select",
  image: "../img/girl6/girl6_0.svg"};

  $scope.avatar_margin = function(index) {
    if ( index === 4 ) {
      return 'grid-3-push'
    }
  };


});