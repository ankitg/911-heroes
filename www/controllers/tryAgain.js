angular.module('911-heroes.controllers', [])

.controller('TryAgainCtrl', function($scope, avatarService) {

  $scope.selectedAvatar = avatarService.getAvatar();

  $scope.practice_again = true;

});