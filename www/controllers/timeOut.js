angular.module('911-heroes.controllers', [])

.controller('TimeOutCtrl', function($scope, $state, stateService) {

    $scope.onButtonPressed = function () {

      var prevPhaseNavLocation = stateService.getNavLocationForPreviousPhase();
      $scope.goToNavLocation(prevPhaseNavLocation);
    }
});
