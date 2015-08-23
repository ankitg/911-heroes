var controllers = angular.module('911-heroes.controllers', []);

controllers.controller('StartCtrl',  ['$scope', 'stateService', '$state', function($scope, stateService, $state) {


  $scope.onStartButtonClicked = function() {

    var nextNavLocation = stateService.getNextNavLocationForStartPage();
    $state.go(nextNavLocation.state);
  };
}]);