angular.module('911-heroes.controllers', [])

.controller('Module4Ctrl', function($scope, $state, SCENARIOS) {

  //module 1
  function module1() {
    $scope.module1 = true;
    $scope.module2 = false;
    $scope.module3 = false;

    chooseScenario();
  }

  var chooseScenario = function() {
    var chosenScenarioCategoryIndex= Math.floor(Math.random() * 4);
    $scope.scenario = SCENARIOS[chosenScenarioCategoryIndex][Math.floor(Math.random() * SCENARIOS[chosenScenarioCategoryIndex].length)];
  };

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

  $scope.goToDialpad = function() {
    $scope.lockscreen = false;
    clearKeypad();
  };

  var keyCount = 0;
  var clearKeypad = function() {
    $scope.dialedNumber = "";
    keyCount = 0;
  };

  $scope.dialPadKeyPressed = function(key) {
    keyCount++;

    // Update the dial screen.
    if(key === "bksp") {
      $scope.dialedNumber = $scope.dialedNumber.slice(0, - 1);
    } else if(key === "call") {
      if($scope.dialedNumber === "911") {
        if(keyCount === 4) {
          module3();
        } else {
          module2();
        }
      } else {
        module2();
      }
    } else if(key === "contacts") {
      console.log("Sorry. You have no friends. :(");
    } else {
      $scope.dialedNumber += key;
    }
  };

  //module 3
  function module3() {
    $scope.module1 = false;
    $scope.module2 = false;
    $scope.module3 = true;

    $scope.calling = true;
  }

});