angular.module('911-heroes.controllers', [])

.controller('Module1Ctrl', function($scope) {

  $scope.scenarios = [ 
    './img/emergencies/fire/photo/fire1_x2.jpg',
    // './img/emergencies/fire/photo/fire2_x1.jpg',
    // './img/emergencies/fire/photo/fire3_x1.jpg',
    // './img/emergencies/fire/photo/fire4_x2.jpg',
    // './img/emergencies/fire/photo/fire5_x2.jpg'
  ];

  $scope.scores = [
    {
      state: 'pass'
    },
    {
      state: 'pass'
    },
    {
      state: 'pass'
    },
    {
      state: 'pass'
    },
    {
      state: 'fail'
    },
    {
      state: 'pass'
    },
    {
      state: 'pass'
    },
    {
      state: 'current'
    },
    {
      state: 'blank'
    },
    {
      state: 'blank'
    }
  ]

});