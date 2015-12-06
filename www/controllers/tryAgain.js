var controllers = angular.module('911-heroes.controllers', []);

controllers.controller('TryAgainCtrl', function($scope, stateService, $timeout) {

  $scope.practiceTextStyle = {'visibility': 'hidden'};
  $scope.practice_again = false;

  var timeout = null;

  $scope.$on('$ionicView.enter', function() {

    timeout = $timeout(animatePracticeAgain, 1000);
  });

  $scope.$on('$ionicView.leave', function() {

    if(timeout) {
      $timeout.cancel(timeout);
    }
  });

  function animatePracticeAgain() {
    $scope.practice_again = true;

    $scope.practiceTextStyle = {'visibility': 'visible'};
  }

  $scope.onButtonPressed = function () {

    var prevPhaseNavLocation = stateService.getCurrentNavLocation();
    $scope.goToNavLocation(prevPhaseNavLocation);
  }
});