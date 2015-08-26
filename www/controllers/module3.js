angular.module('911-heroes.controllers', [])

.controller('Module3Ctrl', function($scope) {

  $scope.scenarios = [ 
    './img/emergencies/fire/photo/fire1_x2.jpg',
  ];

  $scope.video = true;
  $scope.dialpad = false;
  $scope.calling = false;

});