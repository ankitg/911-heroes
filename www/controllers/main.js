var controllers = angular.module('911-heroes.controllers', []);

controllers.controller('MainCtrl', ['$scope', 'stateService', '$state', 'avatarService', function($scope, stateService, $state, avatarService) {

	/**
	 * Convenience property for the current phase. Set during navigation.
	 */
	$scope.currentPhase = null;

	$scope.goToNext = function() {
		var nextNavLocation = stateService.getNextNavLocation();
		$scope.goToNavLocation(nextNavLocation);
	};

	/**
	 * @function
	 *
	 * Used to navigate to a navLocation. Using this function will set the currentNavLocation and will also update
	 * `$scope.currentPhase`.
	 *
	 * @param navLocation {NavLocation}
	 */
	$scope.goToNavLocation = function(navLocation) {

		stateService.setCurrentNavLocation(navLocation);

		// Update the convenience property
		if(stateService.getCurrentNavLocation())
		{
			$scope.currentPhase = stateService.getCurrentNavLocation().phase;
		}

		$state.go(navLocation.state, navLocation.stateParams);
	};

	/**
	 * @function
	 *
	 * Used to navigate to a navLocation which shouldn't be tracked as part of the progress of the game. Example include,
	 * timeOut pages and launch pages.
	 *
	 * @param navLocation {NavLocation}
	 */
	$scope.goToUntrackedNavLocation = function(navLocation) {

		$scope.currentPhase = null;

		$state.go(navLocation.state, navLocation.stateParams);
	};

	$scope.goToTimeoutScreen = function() {
		var navLocation = stateService.getNavLocationForTimeoutPage();
		$scope.goToUntrackedNavLocation(navLocation);
	};

	function goToLaunchLocation() {
		var startNavLocation = stateService.getNavLocationForLaunch();
		$scope.goToUntrackedNavLocation(startNavLocation);
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
		if(callback) {
			audio.onended = function(){ callback(); };
		} else {
			audio.onended = function(){}; // Unset callback to avoid looping on chained playAudio events
		}
		setTimeout(function(){audio.play();},0); // Doesn't work without the timeout ¯\_(ツ)_/¯
	};

	// On start, navigate to a specific page
	goToLaunchLocation();

}]);
