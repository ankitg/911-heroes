angular.module('911-heroes.controllers', [])

.controller('AvatarCtrl', function($scope, avatarService) {

var makeAvatar = function (name, type, img0, img1, img2, img3, img4, img5, img6, img7, img8, img9) {
  return {
    name: name,
    type: type, // Boy OR Girl -- mapped to the folder names :)
    hands_on_hips: img0,
    point_screen_right: img1,
    point_screen_left: img2,
    background: img3,
    one_thumbs_up: img4,
    phone_up: img5,
    practice_again_sad: img6,
    two_thumbs_up_star: img7,
    two_thumbs_up: img8,
    popcorn: img9
  };
};

$scope.avatars = [];

for( var index = 1; index <= 5; index++) {
  $scope.avatars.push(makeAvatar(
    'boy'+index,
    'Boy',
    './img/boy'+index+'/boy'+index+'_0.svg',
    './img/boy'+index+'/boy'+index+'_1.svg',
    './img/boy'+index+'/boy'+index+'_2.svg',
    './img/boy'+index+'/boy'+index+'_3.svg',
    './img/boy'+index+'/boy'+index+'_4.svg',
    './img/boy'+index+'/boy'+index+'_5.svg',
    './img/boy'+index+'/boy'+index+'_6.svg',
    './img/boy'+index+'/boy'+index+'_7.svg',
    './img/boy'+index+'/boy'+index+'_8.svg',
    './img/boy'+index+'/boy'+index+'_9.svg'
  ));
}

for( var index = 1; index <= 6; index++) {
  $scope.avatars.push(makeAvatar(
    'girl'+index,
    'Girl',
    './img/girl'+index+'/girl'+index+'_0.svg',
    './img/girl'+index+'/girl'+index+'_1.svg',
    './img/girl'+index+'/girl'+index+'_2.svg',
    './img/girl'+index+'/girl'+index+'_3.svg',
    './img/girl'+index+'/girl'+index+'_4.svg',
    './img/girl'+index+'/girl'+index+'_5.svg',
    './img/girl'+index+'/girl'+index+'_6.svg',
    './img/girl'+index+'/girl'+index+'_7.svg',
    './img/girl'+index+'/girl'+index+'_8.svg',
    './img/girl'+index+'/girl'+index+'_9.svg'
  ));
}

  $scope.avatar_margin = function(index) {
    if ( index === 4 ) {
      return 'grid-3-push';
    }
  };

  $scope.playAudio("PickYourHero.mp3");
});