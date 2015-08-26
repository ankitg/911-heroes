angular.module('911-heroes.controllers', [])

.controller('Module2Ctrl', function($scope) {

  $scope.lockscreen = true;

  $scope.goToDialpad = function() {
    $scope.lockscreen = false;
  };

});
