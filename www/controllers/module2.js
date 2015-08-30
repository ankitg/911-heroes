angular.module('911-heroes.controllers', [])

.controller('Module2Ctrl', function($scope, utilities) {

  $scope.lockscreen = true;

  $scope.goToDialpad = function() {
    $scope.lockscreen = false;
    audioPrompt();
    visualPrompt();
  };

  if($scope.currentPhase === "M2P1") {
    $scope.playAudio("IdentifyingEmergency1.mp3", null, audioPrompt); // Now let's practice ...
    visualPrompt();
  }

  function audioPrompt() {
    // Add check for audio prompts
    if($scope.currentPhase === "M2P1")
    {
      if($scope.lockscreen) {
      	$scope.playAudio('PracticeDial911_2.mp3'); // Press the emergency call button
      } else if (keyCount < 3) {
      	$scope.playAudio('PracticeDial911_3.mp3'); // Press the green button
      } else if (keyCount === 3) {
      	$scope.playAudio('PracticeDial911_4.mp3'); // Press the call button
      }
    }
  }

  function visualPrompt() {
    // Add check for visual prompts
    if($scope.currentPhase === "M2P1" || $scope.currentPhase === "M2P2")
    {
	  if($scope.lockscreen) { // The code below adds a faded-blink to the emergency button.
		utilities.flash('emergencyCall');
      } else if (keyCount === 0) {
      	utilities.flash('nine');
      } else if (keyCount === 1) {
      	utilities.flash('one');
      } else if (keyCount === 3) {
      	utilities.flash('call');
      } else if (keyCount === 4) {
      	utilities.clearFlashing();
      }
	}
  }

  $scope.dialedNumber = "";
  var keyCount = 0;

  $scope.dialPadKeyPressed = function(key) {
  	keyCount++;

  	// Promts
  	audioPrompt();
    visualPrompt();

  	// Update the dial screen.
  	if(key === "bksp") {
		$scope.dialedNumber = $scope.dialedNumber.slice(0, - 1);
  	} else if(key === "call") {
  		if($scope.dialedNumber === "911") {
  			console.log("Thank you for calling. GOODBYE!");
  		}
  	} else if(key === "contacts") {
		console.log("Sorry. You have no friends. :(");
  	} else {
  	  	$scope.dialedNumber += key;
  	}

  	// Check for erroneous key presses.
  	if((keyCount === 1 && key != "9") || (keyCount === 2 && key != "1") || (keyCount === 3 && key != "1") || (keyCount === 4 && key != "call")) {
  		console.log("You made a boo boo :( … restart phase");
  	}
  };

});
