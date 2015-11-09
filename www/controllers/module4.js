
function Module4Ctrl($scope, $state, idleTimer) {

  // See after the constructor for rest of inheritance pattern
  BaseModuleCtrl.call(this, $scope, $state, idleTimer);

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

};

Module4Ctrl.prototype = Object.create(BaseModuleCtrl.prototype);
Module4Ctrl.prototype.constructor = Module4Ctrl;


var controllers = angular.module('911-heroes.controllers', []);
controllers.controller('Module4Ctrl', Module4Ctrl);
