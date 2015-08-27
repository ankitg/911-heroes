angular.module('911-heroes.controllers', [])

.controller('Module2Ctrl', function($scope) {

  $scope.lockscreen = true;

  $scope.goToDialpad = function() {
    $scope.lockscreen = false;
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
      }
    }
  }

  function visualPrompt() {
    // Add check for visual prompts
    if($scope.currentPhase === "M2P1" || $scope.currentPhase === "M2P2")
    {
	  if($scope.lockscreen) { // The code below adds a faded-blink to the emergency button.
	  	var ofs = 0;
		var el = document.getElementById('emergencyCall');
	  	window.setInterval(function(){
		  el.style.background = 'rgba(0,255,0,'+Math.abs(Math.sin(ofs))+')';
		  ofs += 0.01;
		}, 10);
      }
    }
  }

});
