angular.module('911-heroes.controllers', [])

.controller('LoginCtrl', function($scope) {


  $scope.submitForm = function(isValid){

    $scope.submitted = true;

    if(isValid) {
      console.log('party');
    }

    else {
      console.log('you fail');
    }

  };

});