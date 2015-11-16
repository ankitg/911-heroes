angular.module('911-heroes.controllers', [])

.controller('Module4Ctrl', function($scope, $state, SCENARIOS) {

  //module 1
  function module1() {
    $scope.module1 = true;
    $scope.module2 = false;
    $scope.module3 = false;

    var chosenScenarioCategoryIndex= Math.floor(Math.random() * 4);
    $scope.scenario = SCENARIOS[chosenScenarioCategoryIndex][Math.floor(Math.random() * SCENARIOS[chosenScenarioCategoryIndex].length)];
  }

  module1();

  $scope.validateAnswer = function(answer) {
    if(answer === $scope.scenario.is_emergency) {
      module2();
    } else {
      module1();
    }
  };

  //module 2
  function module2() {
    $scope.module1 = false;
    $scope.module2 = true;
    $scope.module3 = false;
    $scope.lockscreen = true;
  }

  //module 3
  $scope.module3 = false;
  $scope.video   = true;
  $scope.dialpad = false;
  $scope.calling = false;

});