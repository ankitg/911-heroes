angular.module('911-heroes.controllers', [])

.controller('LoginCtrl', function($scope) {

  $scope.submitForm = function(isValid){

    $scope.submitted = true;

    if(isValid) {
      $scope.goToNext();
    }

    else {
      console.log('you fail');
    }
  };

});