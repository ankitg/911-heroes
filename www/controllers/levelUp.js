angular.module('911-heroes.controllers', [])

.controller('LevelUpCtrl', function($scope, avatarService) {

  $scope.selectedAvatar = avatarService.getAvatar();

  $scope.phase_1 = false;
  $scope.phase_2 = false;
  $scope.level_up = true;

});