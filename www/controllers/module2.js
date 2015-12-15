
function Module2Ctrl($scope, $state, utilities, idleTimer) {

  // See after the constructor for rest of inheritance pattern
  BaseModuleCtrl.call(this, $scope, $state, idleTimer);

  var lastKeyPressed = null;

// override
  $scope.visualPrompt = function(isReprompt) {

    var keyToFlash = null;

    if($scope.lockscreen) { // The code below adds a faded-blink to the emergency button.
      keyToFlash = 'emergencyCall';
    } else if ($scope.dialedNumber.length === 0) {
      keyToFlash = 'nine';
    } else if ($scope.dialedNumber.length === 1 && $scope.dialedNumber === "9") {
      keyToFlash = 'one';
    } else if ($scope.dialedNumber.length === 2 && $scope.dialedNumber === "91") {
      keyToFlash = 'one';
    } else if ($scope.dialedNumber.length === 3 && $scope.dialedNumber === "911" && lastKeyPressed != "call") {
      keyToFlash = 'call';
    } else if ($scope.dialedNumber.length === 3 && $scope.dialedNumber === "911" && lastKeyPressed === "call") {
      utilities.clearFlashing();
    } else {
      // Key must have been incorrect
      keyToFlash = 'bksp';
    }

    if(keyToFlash) {
      if($scope.currentPhase === "M2P1" || $scope.currentPhase === "M2P2" || (isReprompt && $scope.currentPhase === "M2P3")) {
        utilities.flash(keyToFlash);
      } else {
        // if "M2P3" and NOT reprompt. In this case, we want to clear flashing in case we did a reprompt
        utilities.clearFlashing();
      }
    }
  };

  // override
  $scope.audioPrompt = function(isReprompt) {

    // Add check for audio prompts
    if($scope.currentPhase === "M2P1" || (isReprompt && $scope.currentPhase === "M2P2"))
    {
      $scope.playAudio('PracticeDial911_3.mp3'); // Press the green button
    }
  };

  $scope.lockscreen = true;

  $scope.goToDialpad = function() {
    $scope.lockscreen = false;
    $scope.audioPrompt();
    $scope.visualPrompt();
  };

  if($scope.currentPhase === "M2P1") {
    $scope.playAudio("IdentifyingEmergency1.mp3", null, $scope.audioPrompt); // Now let's practice ...
  }
  $scope.visualPrompt();

  $scope.dialedNumber = "";
  var keyCount = 0;

  $scope.dialPadKeyPressed = function(key) {
    keyCount++;
    lastKeyPressed = key;

    if($scope.timer) {
      $scope.timer.nudge();
    }

    // Update the dial screen.
    if(key === "bksp") {
      $scope.dialedNumber = $scope.dialedNumber.slice(0, - 1);
    } else if(key === "call") {
      if($scope.dialedNumber === "911") {
        console.log("Thank you for calling. GOODBYE!");
        if(keyCount === 4) {
          $state.go('main.levelUp');
        } else {
          $state.go('main.tryAgain'); // You failed :(
        }
      }
    } else if(key === "contacts") {
      console.log("Sorry. You have no friends. :(");
    } else {
      $scope.dialedNumber += key;
    }

    // Prompts
    $scope.audioPrompt();
    $scope.visualPrompt();

  };
};


Module2Ctrl.prototype = Object.create(BaseModuleCtrl.prototype);
Module2Ctrl.prototype.constructor = Module2Ctrl;

var controllers = angular.module('911-heroes.controllers', []);
controllers.controller('Module2Ctrl', Module2Ctrl);
