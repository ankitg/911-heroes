angular.module('911-heroes.controllers', [])

.controller('Module3Ctrl', function($scope, SCENARIOS) {

  var chosenScenarioCategoryIndex = Math.floor(Math.random() * (SCENARIOS.length)); // Random index between 0 and SCENARIOS.length - 1
  var chosenScenarioCategory = SCENARIOS[chosenScenarioCategoryIndex]; // Chosen category of scenarios, any but last - non-emergrncy
  var chosenScenarioIndex = Math.floor(Math.random() * (chosenScenarioCategory.length + 1)); // Index of chosen scenario with the chosen category

  $scope.scenario = chosenScenarioCategory[chosenScenarioIndex];

  $scope.video = false;
  $scope.dialpad = false;
  $scope.calling = true;

  audioPrompt();

  function audioPrompt() {
    // Add check for audio prompts
    if($scope.currentPhase === "M3P1")
    {
      if($scope.video)   {}
      if($scope.dialpad) {}
      if($scope.calling) { $scope.playAudio('PhoneRinging.mp3'); }
    }
  }

});