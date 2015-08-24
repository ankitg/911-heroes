var controllers = angular.module('911-heroes.controllers', []);

controllers.controller('MainCtrl', ['$scope', 'stateService', '$state', 'avatarService', function($scope, stateService, $state, avatarService) {

	// On start, navigate to a specific page
	var startNavLocation = stateService.getNavLocationForLaunch();
	$state.go(startNavLocation.state);

	// Convenience property for the current phase
	$scope.currentPhase = null;
	if(stateService.getCurrentNavLocation())
	{
		$scope.currentPhase = stateService.getCurrentNavLocation().phase;
	}

	$scope.goToNext = function() {
		var nextNavLocation = stateService.getNextNavLocation();
		$state.go(nextNavLocation.state);
		stateService.setCurrentNavLocation(nextNavLocation);
		updateCurrentPhase();

		if(stateService.getCurrentNavLocation())
		{
			$scope.currentPhase = stateService.getCurrentNavLocation().phase;
		}
	};

	$scope.selectedAvatar = avatarService.getAvatar();

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

}]);
