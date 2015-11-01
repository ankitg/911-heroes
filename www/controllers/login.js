angular.module('911-heroes.controllers', [])

.controller('LoginCtrl', function($scope, STORAGE) {

  $scope.submitForm = function(isValid){

    $scope.submitted = true;

    if(isValid) {
      var currentUser = {
      	"name" 	 : loginForm.name.value,
      	"address": loginForm.street_num.value+" "+loginForm.street_name.value
  	  };
      window.localStorage.setItem(STORAGE.CURRENT_USER, JSON.stringify(currentUser));
      $scope.goToNext();
    }

    else {
      console.log('you fail');
    }
  };

});