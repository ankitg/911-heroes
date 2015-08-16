angular.module('911-heroes.controllers', [])

.controller('LoginCtrl', function($scope, $state) {


  $scope.submitForm = function(isValid){

    $scope.submitted = true;

    if(isValid) {
      $state.go('main.avatar');
    }

    else {
      console.log('you fail');
    }

  };

});