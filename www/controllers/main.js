var controllers = angular.module('911-heroes.controllers', []);

controllers.controller('MainCtrl', ['$scope', 'stateService', '$state', function($scope, stateService, $state) {

	// On start, navigate to a specific page
	var startNavLocation = stateService.getNavLocationForLaunch();
	$state.go(startNavLocation.state);

	$scope.goToNext = function() {
		var nextNavLocation = stateService.getNextNavLocation();
		$state.go(nextNavLocation.state);
		stateService.setCurrentNavLocation(nextNavLocation);
	};
}]);
