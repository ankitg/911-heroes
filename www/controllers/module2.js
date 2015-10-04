angular.module('911-heroes.controllers', [])

.controller('Module2Ctrl', function($scope, $state, utilities) {

  $scope.lockscreen = true;

  $scope.goToDialpad = function() {
    $scope.lockscreen = false;
    audioPrompt();
    visualPrompt();
  };

  if($scope.currentPhase === "M2P1") {
    $scope.playAudio("IdentifyingEmergency1.mp3", null, audioPrompt); // Now let's practice ...
  }
  visualPrompt();

  function audioPrompt() {
    // Add check for audio prompts
    if($scope.currentPhase === "M2P1")
    {
      	$scope.playAudio('PracticeDial911_3.mp3'); // Press the green button
    }
  }

  function visualPrompt(key) {
    // Add check for visual prompts
    if($scope.currentPhase === "M2P1" || $scope.currentPhase === "M2P2")
    {
  	  if($scope.lockscreen) { // The code below adds a faded-blink to the emergency button.
  	    utilities.flash('emergencyCall');
      } else if ($scope.dialedNumber.length === 0) {
      	utilities.flash('nine');
      } else if ($scope.dialedNumber.length === 1 && $scope.dialedNumber === "9") {
      	utilities.flash('one');
      } else if ($scope.dialedNumber.length === 2 && $scope.dialedNumber === "91") {
        utilities.flash('one');
      } else if ($scope.dialedNumber.length === 3 && $scope.dialedNumber === "911" && key != "call") {
      	utilities.flash('call');
      } else if ($scope.dialedNumber.length === 3 && $scope.dialedNumber === "911" && key === "call") {
      	utilities.clearFlashing();
      }
  	}
  }

  $scope.dialedNumber = "";
  var keyCount = 0;

  $scope.dialPadKeyPressed = function(key) {
  	keyCount++;

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

    // Promts
    audioPrompt();
    visualPrompt(key);

  };

});
