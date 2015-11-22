var controllers = angular.module('911-heroes.controllers', []);

controllers.controller('TryAgainCtrl', function($scope, stateService) {

  $scope.practice_again = true;

  $scope.onButtonPressed = function () {

    var prevPhaseNavLocation = stateService.getCurrentNavLocation();
    $scope.goToNavLocation(prevPhaseNavLocation);
  }
});