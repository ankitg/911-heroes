angular.module('911-heroes.controllers', [])

.controller('Module4Ctrl', function($scope, $state) {

  //module 1
  $scope.module1 = true;

  //module 2
  $scope.module2 = false;
  $scope.lockscreen = true;

  //module 3
  $scope.module3 = false;
  $scope.video   = true;
  $scope.dialpad = false;
  $scope.calling = false;

});