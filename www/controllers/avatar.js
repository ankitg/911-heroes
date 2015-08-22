angular.module('911-heroes.controllers', [])

.controller('AvatarCtrl', function($scope, avatarService) {

var makeAvatar = function (type, name, img0, img1, img2, img3, img4, img5, img6, img7, img8, img9) {
  return {
    type: type,
    name: name,
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
  }
}
$scope.avatars = [];

// for( 
  $scope.avatars.push(makeAvatar(
    'boy1',
    './img/boy1/boy1_0.svg',
    './img/boy1/boy1_1.svg',
    './img/boy1/boy1_2.svg',
    './img/boy1/boy1_3.svg',
    './img/boy1/boy1_4.svg',
    './img/boy1/boy1_5.svg',
    './img/boy1/boy1_6.svg',
    './img/boy1/boy1_7.svg',
    './img/boy1/boy1_8.svg',
    './img/boy1/boy1_9.svg'
  ));
  $scope.avatars.push(makeAvatar(
    'boy2',
    './img/boy2/boy2_0.svg',
    './img/boy2/boy2_1.svg',
    './img/boy2/boy2_2.svg',
    './img/boy2/boy2_3.svg',
    './img/boy2/boy2_4.svg',
    './img/boy2/boy2_5.svg',
    './img/boy2/boy2_6.svg',
    './img/boy2/boy2_7.svg',
    './img/boy2/boy2_8.svg',
    './img/boy1/boy1_9.svg'
  ));
  $scope.avatars.push(makeAvatar(
    'boy3',
    './img/boy3/boy3_0.svg',
    './img/boy3/boy3_1.svg',
    './img/boy3/boy3_2.svg',
    './img/boy3/boy3_3.svg',
    './img/boy3/boy3_4.svg',
    './img/boy3/boy3_5.svg',
    './img/boy3/boy3_6.svg',
    './img/boy3/boy3_7.svg',
    './img/boy3/boy3_8.svg',
    './img/boy1/boy1_9.svg'
  ));
  $scope.avatars.push(makeAvatar(
    'boy4',
    './img/boy4/boy4_0.svg',
    './img/boy4/boy4_1.svg',
    './img/boy4/boy4_2.svg',
    './img/boy4/boy4_3.svg',
    './img/boy4/boy4_4.svg',
    './img/boy4/boy4_5.svg',
    './img/boy4/boy4_6.svg',
    './img/boy4/boy4_7.svg',
    './img/boy4/boy4_8.svg',
    './img/boy1/boy1_9.svg'
  ));
  $scope.avatars.push(makeAvatar(
    'boy5',
    './img/boy5/boy5_0.svg',
    './img/boy5/boy5_1.svg',
    './img/boy5/boy5_2.svg',
    './img/boy5/boy5_3.svg',
    './img/boy5/boy5_4.svg',
    './img/boy5/boy5_5.svg',
    './img/boy5/boy5_6.svg',
    './img/boy5/boy5_7.svg',
    './img/boy5/boy5_8.svg',
    './img/boy1/boy1_9.svg'
  ));
  $scope.avatars.push(makeAvatar(
    'girl1',
    './img/girl1/girl1_0.svg',
    './img/girl1/girl1_1.svg',
    './img/girl1/girl1_2.svg',
    './img/girl1/girl1_3.svg',
    './img/girl1/girl1_4.svg',
    './img/girl1/girl1_5.svg',
    './img/girl1/girl1_6.svg',
    './img/girl1/girl1_7.svg',
    './img/girl1/girl1_8.svg',
    './img/boy1/boy1_9.svg'
  ));
  $scope.avatars.push(makeAvatar(
    'girl2',
    './img/girl2/girl2_0.svg',
    './img/girl2/girl2_1.svg',
    './img/girl2/girl2_2.svg',
    './img/girl2/girl2_3.svg',
    './img/girl2/girl2_4.svg',
    './img/girl2/girl2_5.svg',
    './img/girl2/girl2_6.svg',
    './img/girl2/girl2_7.svg',
    './img/girl2/girl2_8.svg',
    './img/boy1/boy1_9.svg'
  ));
  $scope.avatars.push(makeAvatar(
    'girl3',
    './img/girl3/girl3_0.svg',
    './img/girl3/girl3_1.svg',
    './img/girl3/girl3_2.svg',
    './img/girl3/girl3_3.svg',
    './img/girl3/girl3_4.svg',
    './img/girl3/girl3_5.svg',
    './img/girl3/girl3_6.svg',
    './img/girl3/girl3_7.svg',
    './img/girl3/girl3_8.svg',
    './img/boy1/boy1_9.svg'
  ));
  $scope.avatars.push(makeAvatar(
    'girl4',
    './img/girl4/girl4_0.svg',
    './img/girl4/girl4_1.svg',
    './img/girl4/girl4_2.svg',
    './img/girl4/girl4_3.svg',
    './img/girl4/girl4_4.svg',
    './img/girl4/girl4_5.svg',
    './img/girl4/girl4_6.svg',
    './img/girl4/girl4_7.svg',
    './img/girl4/girl4_8.svg',
    './img/boy1/boy1_9.svg'
  ));
  $scope.avatars.push(makeAvatar(
    'girl5',
    './img/girl5/girl5_0.svg',
    './img/girl5/girl5_1.svg',
    './img/girl5/girl5_2.svg',
    './img/girl5/girl5_3.svg',
    './img/girl5/girl5_4.svg',
    './img/girl5/girl5_5.svg',
    './img/girl5/girl5_6.svg',
    './img/girl5/girl5_7.svg',
    './img/girl5/girl5_8.svg',
    './img/boy1/boy1_9.svg'
  ));
  $scope.avatars.push(makeAvatar(
    'girl6',
    './img/girl6/girl6_0.svg',
    './img/girl6/girl6_1.svg',
    './img/girl6/girl6_2.svg',
    './img/girl6/girl6_3.svg',
    './img/girl6/girl6_4.svg',
    './img/girl6/girl6_5.svg',
    './img/girl6/girl6_6.svg',
    './img/girl6/girl6_7.svg',
    './img/girl6/girl6_8.svg',
    './img/boy1/boy1_9.svg'
  ));
// );

  // Doing some garbage to test the avatarService, fix appropriately.

  var blankAvatar = makeAvatar('blank','./img/question_mark.png','./img/question_mark.png','./img/question_mark.png','./img/question_mark.png','./img/question_mark.png','./img/question_mark.png','./img/question_mark.png','./img/question_mark.png','./img/question_mark.png');

  if(avatarService.getAvatar() === null)
  {
    avatarService.setAvatar(blankAvatar);
  }
  
  $scope.selectedAvatar = avatarService.getAvatar();

  $scope.selectAvatar = function(selectedAvatar) {
    avatarService.setAvatar(selectedAvatar);
    $scope.selectedAvatar = selectedAvatar;
  }

  $scope.avatar_margin = function(index) {
    if ( index === 4 ) {
      return 'grid-3-push'
    }
  };


});