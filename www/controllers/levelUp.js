angular.module('911-heroes.controllers', [])

.controller('LevelUpCtrl', function($scope) {

   $scope.phase_1 = $scope.phase_2 = $scope.level_up = false;

  if($scope.currentPhase === "M1P1" || $scope.currentPhase === "M2P1" || $scope.currentPhase === "M3P1") {
  	$scope.phase_1 = true;
  	$scope.playAudio("Congratulations.mp3", null, goToNextWithDelay());
  } else if($scope.currentPhase === "M1P2" || $scope.currentPhase === "M2P2") {
  	$scope.phase_2 = true;
  	$scope.playAudio("Congratulations.mp3", null, goToNextWithDelay());
  } else if($scope.currentPhase === "M1P3" || $scope.currentPhase === "M2P3" || $scope.currentPhase === "M3P2") {	
    $scope.level_up = true; 
    $scope.playAudio("Congratulations.mp3", null, goToNextWithDelay());
  } else if($scope.currentPhase == "M4P1") {
//  	$scope.level_up = true; 
    $scope.playAudio("FinalCongratulations.mp3");
  }

  function goToNextWithDelay(delay) {
    var delayDuration;
    if(delay) { delayDuration = delay; }
    else { delayDuration = 5000; }

    setTimeout($scope.goToNext, delayDuration);
  }

});