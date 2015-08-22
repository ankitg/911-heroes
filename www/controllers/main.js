angular.module('911-heroes.controllers', [])

.controller('MainCtrl', ['$scope', 'stateService', '$state', function($scope, stateService, $state) {

	$scope.goToNext = function() {
		var nextNavLocation = stateService.getNextNavLocation();
		$state.go(nextNavLocation.state);
		stateService.setCurrentNavLocation(nextNavLocation);
	};
}]);
