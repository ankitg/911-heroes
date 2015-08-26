angular.module('911-heroes.controllers', [])

.controller('Module1Ctrl', function($scope) {

  $scope.scenarios = [ 
    './img/emergencies/fire/photo/fire1_x2.jpg',
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