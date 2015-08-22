angular.module('911-heroes.controllers', [])

.controller('VideoCtrl', function($scope) {

  $scope.scenarios = [ 
    './img/emergencies/fire/photo/fire1_x2.jpg',
    // './img/emergencies/fire/photo/fire2_x1.jpg',
    // './img/emergencies/fire/photo/fire3_x1.jpg',
    // './img/emergencies/fire/photo/fire4_x2.jpg',
    // './img/emergencies/fire/photo/fire5_x2.jpg'
  ];

  $scope.clapperboard = true;

  $scope.hideClapperboard = function() {
    $scope.clapperboard = false;
  }

});