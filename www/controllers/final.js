angular.module('911-heroes.controllers', [])

.controller('FinalCtrl', function($scope) {


    $scope.$on('$ionicView.enter', function() {
      $scope.playAudio("FinalCongratulations.mp3");
    });
});

