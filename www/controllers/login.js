angular.module('911-heroes.controllers', [])

.controller('LoginCtrl', function($scope, stateService) {


  $scope.submitForm = function(isValid){
  	
    $scope.submitted = true;

    if(isValid) {
      console.log('party');
      stateService.onNext()
    }

    else {
      console.log('you fail');
    }

  };

});