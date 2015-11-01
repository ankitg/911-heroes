var controllers = angular.module('911-heroes.controllers', []);

controllers.controller('StartCtrl',  ['$scope', '$stateParams', 'stateService', '$state', function($scope, $stateParams, stateService, $state) {

  $scope.onStartButtonClicked = function() {

    var nextNavLocation = stateService.getNextNavLocationForStartPage($stateParams.isLaunch);
    $scope.goToNavLocation(nextNavLocation);
  };

  $scope.onRestartButtonClicked = function() {
    $scope.restart();
  }
}]);
