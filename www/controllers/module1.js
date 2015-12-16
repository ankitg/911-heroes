
function Module1Ctrl($scope, $state, SCENARIOS, SOUNDS, idleTimer) {

  // See after the constructor for rest of inheritance pattern
  BaseModuleCtrl.call(this, $scope, $state, idleTimer);

  // override
  $scope.audioPrompt = function (isReprompt) {

    // Add check for audio prompts
    if($scope.currentPhase === "M1P1" || (isReprompt && $scope.currentPhase === "M1P2"))
    {
      if($scope.scenario.is_emergency) { $scope.playAudio('IdentifyingEmergency2.mp3'); }
      else { $scope.playAudio('IdentifyingEmergency3.mp3'); }
    }
  };

  // override
  $scope.visualPrompt = function(isReprompt) {
    // Add check for visual prompts
    if($scope.currentPhase === "M1P1" || $scope.currentPhase === "M1P2" || (isReprompt && $scope.currentPhase === "M1P3"))
    {
      if($scope.scenario.is_emergency) { $scope.heroImgSrc = $scope.selectedAvatar.point_screen_left; }
      else { $scope.heroImgSrc = $scope.selectedAvatar.point_screen_right; }
    }
    else {
      $scope.heroImgSrc = $scope.selectedAvatar.hands_on_hips;
    }
  };

  var getNewScenarioSet = function() {
    var scenarios = SCENARIOS;

    var scenarioSetCategories = [];
    var scenarioCounts = [0,0,0,0];

    for (var index=0; index<10; index++) {
      var chosenScenarioCategory = Math.floor(Math.random() * 4);
      if (index === 0) { // If it's the first item, just add it to the array.
        scenarioSetCategories[index] = chosenScenarioCategory;
        scenarioCounts[chosenScenarioCategory]+=1;
      }
      else {
        while(chosenScenarioCategory === scenarioSetCategories[index - 1] || scenarioCounts[chosenScenarioCategory] >= 3) // If it's of the same type as the previous scenario OR we've already picked 3 scenarios of this type, pick again.
        {
          chosenScenarioCategory = Math.floor(Math.random() * 4);
        }
        scenarioSetCategories[index] = chosenScenarioCategory;
        scenarioCounts[chosenScenarioCategory]+=1;
      }
    }

    var scenarioSet = {};
    var scenarioSetArray = [];

    for (var index=0; index<10; index++) {
      var chosenScenarioIndex = Math.floor(Math.random() * (scenarios[scenarioSetCategories[index]].length));
      while (scenarios[scenarioSetCategories[index]][chosenScenarioIndex].id in scenarioSet)
      {
        chosenScenarioIndex = Math.floor(Math.random() * (scenarios[scenarioSetCategories[index]].length));
      }
      scenarioSet[scenarios[scenarioSetCategories[index]][chosenScenarioIndex].id] = scenarios[scenarioSetCategories[index]][chosenScenarioIndex];
      scenarioSetArray[index] = scenarios[scenarioSetCategories[index]][chosenScenarioIndex];
    }

    // Marking variables ready for garbage collection to help the GC along
    scenarios = undefined;
    scenarioSetCategories = undefined;
    scenarioSet = undefined;

    return scenarioSetArray;
  };

  var currentScenarioSet = getNewScenarioSet();

  var currentIndex = 0;
  $scope.scenario = currentScenarioSet[currentIndex];
  $scope.visualPrompt();

  var isFirstAttempt = true; // Boolean to help determine if the question was answered correctly on the first attempt.
  var correctCounter = 0; // Counter to keep track of correct answers and determine if >= 80% of the answers were correct.
  $scope.validateAnswer = function(answer) {

    // track user activity
    if($scope.timer) {
      $scope.timer.nudge();
    }

    // INCORRECT
    if(answer !== currentScenarioSet[currentIndex].is_emergency) {
      $scope.scores[currentIndex] = { 'state':'fail' };
      isFirstAttempt = false;
      $scope.playAudio(SOUNDS.INCORRECT);
      return;
    }

    // CORRECT
    if(isFirstAttempt) {
      $scope.scores[currentIndex] = { 'state':'pass' };
      correctCounter++;
    }

    if($scope.currentPhase === "M1P3") {
      // Using timeout here to avoid "scope in progress" error.
      setTimeout(continueAfterAnswer, 0);

    } else {

      $scope.heroImgSrc = $scope.selectedAvatar.hands_on_hips;

      $scope.playAudio(SOUNDS.CORRECT, null, continueAfterAnswer);
    }
  };

  function continueAfterAnswer() {
    isFirstAttempt = true;
    if(currentIndex < (currentScenarioSet.length - 1)) {
      currentIndex++; // This is in here to avoid potential "Index out of bounds", cause by fast clicking after the last scenario.
      $scope.scenario = currentScenarioSet[currentIndex];
      $scope.$apply(function() {
        $scope.audioPrompt();
        $scope.visualPrompt();
      });
      $scope.scores[currentIndex] = { 'state':'current' };
    } else if (currentIndex === (currentScenarioSet.length - 1)) {
      // Check if atleast 80% of the questions were answered correctly.
      if(correctCounter >= (0.8 * currentScenarioSet.length)) {
        $state.go('main.levelUp');
      } else {
        $state.go('main.tryAgain'); // You failed :(
      }
    }
  }

  if($scope.currentPhase === "M1P1") {
    $scope.playAudio("IdentifyingEmergency1.mp3", null, $scope.audioPrompt);
  }


  $scope.scores = [
    {
      state: 'current'
    },
    {
      state: 'blank'
    },
    {
      state: 'blank'
    },
    {
      state: 'blank'
    },
    {
      state: 'blank'
    },
    {
      state: 'blank'
    },
    {
      state: 'blank'
    },
    {
      state: 'blank'
    },
    {
      state: 'blank'
    },
    {
      state: 'blank'
    }
  ];

};

Module1Ctrl.prototype = Object.create(BaseModuleCtrl.prototype);
Module1Ctrl.prototype.constructor = Module1Ctrl;

var controllers = angular.module('911-heroes.controllers', []);
controllers.controller('Module1Ctrl', Module1Ctrl);
