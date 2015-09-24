var controllers = angular.module('911-heroes.controllers', []);

controllers.controller('MainCtrl', ['$scope', 'stateService', '$state', 'avatarService', function($scope, stateService, $state, avatarService) {

	// On start, navigate to a specific page
	goToLaunchLocation();

	// Convenience property for the current phase
	$scope.currentPhase = null;
	if(stateService.getCurrentNavLocation())
	{
		$scope.currentPhase = stateService.getCurrentNavLocation().phase;
	}

	$scope.goToNext = function() {
		var nextNavLocation = stateService.getNextNavLocation();
		$state.go(nextNavLocation.state, nextNavLocation.stateParams);
		stateService.setCurrentNavLocation(nextNavLocation);

		// Update the convenience property
		if(stateService.getCurrentNavLocation())
		{
			$scope.currentPhase = stateService.getCurrentNavLocation().phase;
		}
	};

	$scope.restart = function () {
		window.localStorage.clear();
		goToLaunchLocation();
	};

	// Convenience property for the selected avatar
	$scope.selectedAvatar = avatarService.getAvatar();
	$scope.selectAvatar = function(selectedAvatar) {
		avatarService.setAvatar(selectedAvatar);
		$scope.selectedAvatar = selectedAvatar;
	};

	$scope.playAudio = function(audioSrc, audioElementId, callback) {
		if(!audioElementId) { audioElementId="audioClip"; }
		var audio = document.getElementById(audioElementId);
	    audio.src = "./audio/"+$scope.selectedAvatar.type+"/"+audioSrc; // Set audio source to (fe)male voice according to the selected avatar
	    audio.load();
		setTimeout(function(){audio.play();},0); // Doesn't work without the timeout ¯\_(ツ)_/¯
		if(callback) {
			audio.onended = function(){ callback(); };
		} else {
			audio.onended = function(){}; // Unset callback to avoid looping on chained playAudio events
		}
	};

	function goToLaunchLocation() {
		var startNavLocation = stateService.getNavLocationForLaunch();
		$state.go(startNavLocation.state, startNavLocation.stateParams);
	}

}]);
