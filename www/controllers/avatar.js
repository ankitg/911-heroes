angular.module('911-heroes.controllers', [])

.controller('AvatarCtrl', function($scope, avatarService) {

/*
  img1: hand on hips
*/

// var makeAvatar = function (name, img1, img2, img3) {
//   return {
//     name: name,
//     main_img: img1,
//     hand_on_hip
//   }
// }
// $scope.avatars = [];

// for()
// $scope.avatars.push(makeAvatar('boy1','',''))



  $scope.avatars = [ 
    {
      name: 'boy 1',
      image: './img/boy1/boy1_0.svg',
    },
    {
      name: 'boy 2',
      image: './img/boy2/boy2_0.svg',
    },
    {
      name: 'boy 3',
      image: './img/boy3/boy3_0.svg',
    },
    {
      name: 'boy 4',
      image: './img/boy4/boy4_0.svg',
    },
    {
      name: 'boy 5',
      image: './img/boy5/boy5_0.svg',
    },
    {
      name: 'girl 1',
      image: './img/girl1/girl1_0.svg',
    },
    {
      name: 'girl 2',
      image: './img/girl2/girl2_0.svg',
    },
    {
      name: 'girl 3',
      image: './img/girl3/girl3_0.svg',
    },
    {
      name: 'girl 4',
      image: './img/girl4/girl4_0.svg',
    },
    {
      name: 'girl 5',
      image: './img/girl5/girl5_0.svg',
    },
    {
      name: 'girl 6',
      image: './img/girl6/girl6_0.svg'
    }
  ];

  // Doing some garbage to test the avatarService, fix appropriately.

  var blankAvatar = {
    name: null,
    image: './img/question_mark.png'
  };

  avatarService.setAvatar(blankAvatar);
  $scope.selectedAvatar = avatarService.getAvatar();

  $scope.avatar_margin = function(index) {
    if ( index === 4 ) {
      return 'grid-3-push'
    }
  };


});