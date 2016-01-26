var controllers = angular.module('911-heroes.controllers', [])

controllers.controller('FinalCtrl', function($scope) {

  $scope.$on('$ionicView.enter', function() {
    $scope.playAudio("FinalCongratulations.mp3");

    setTimeout(showRestartButton, 5000);
  });

  $scope.isRestartVisible = false;

  function showRestartButton() {
    $scope.$apply(function() {
      $scope.isRestartVisible = true;
    });
  }

  $scope.onRestartButtonClicked = function() {
    $scope.restart();
  }
});

