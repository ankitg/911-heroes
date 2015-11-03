var controllers = angular.module('911-heroes.controllers', []);

controllers.controller('Module1Ctrl', function($scope, $state, SCENARIOS, idleTimer) {

  var timer;

  $scope.$on('$ionicView.enter', function() {

    // No timer for phase 1
    if($scope.currentPhase !== 'M1P1') {
      timer = new idleTimer.IdleTimer(promptOnIdle, 15);
    }
  });

  $scope.$on('$ionicView.leave', function() {

    if(timer) {
      timer.stop();
      timer = null;
    }
  });

  function promptOnIdle(consecutiveCallbackCount) {

    switch(consecutiveCallbackCount) {
      case 0:
        $scope.$apply(function() {
          audioPrompt(true);
          visualPrompt(true);
        });
        break;

      case 1:
        timer.stop();
        $scope.goToTimeoutScreen();
        break;

      default:
        // NO-OP
        console.log("Warning: should not reach here");
    }
  }

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
  visualPrompt();

  var isFirstAttempt = true; // Boolean to help determine if the question was answered correctly on the first attempt.
  var correctCounter = 0; // Counter to keep track of correct answers and determine if >= 80% of the answers were correct.
  $scope.validateAnswer = function(answer) {

    // track user activity
    if(timer) {
      timer.nudge();
    }

    if(answer === currentScenarioSet[currentIndex].is_emergency) {
      if(isFirstAttempt) {
        $scope.scores[currentIndex] = { 'state':'pass' };
        correctCounter++;
      }
    }
    else {
      $scope.scores[currentIndex] = { 'state':'fail' };
      isFirstAttempt = false;
      return;
    }

    isFirstAttempt = true;
    if(currentIndex < (currentScenarioSet.length - 1)) {
      currentIndex++; // This is in here to avoid potential "Index out of bounds", cause by fast clicking after the last scenario.
      $scope.scenario = currentScenarioSet[currentIndex];
      audioPrompt();
      visualPrompt();
      $scope.scores[currentIndex] = { 'state':'current' };
    } else if (currentIndex === (currentScenarioSet.length - 1)) {
      // Check if atleast 80% of the questions were answered correctly.
      if(correctCounter >= (0.8 * currentScenarioSet.length)) {
        $state.go('main.levelUp');
      } else {
        $state.go('main.tryAgain'); // You failed :(
      }
    }
  };

  function audioPrompt(isReprompt) {
    // Add check for audio prompts
    if($scope.currentPhase === "M1P1" || (isReprompt && $scope.currentPhase === "M1P2"))
    {
      if($scope.scenario.is_emergency) { $scope.playAudio('IdentifyingEmergency2.mp3'); }
      else { $scope.playAudio('IdentifyingEmergency3.mp3'); }
    }
  }

  function visualPrompt(isReprompt) {
    // Add check for visual prompts
    if($scope.currentPhase === "M1P1" || $scope.currentPhase === "M1P2" || (isReprompt && $scope.currentPhase === "M1P3"))
    {
      if($scope.scenario.is_emergency) { $scope.heroImgSrc = $scope.selectedAvatar.point_screen_left; }
      else { $scope.heroImgSrc = $scope.selectedAvatar.point_screen_right; }
    }
    else {
      $scope.heroImgSrc = $scope.selectedAvatar.hands_on_hips;
    }
  }

  if($scope.currentPhase === "M1P1") {
    $scope.playAudio("IdentifyingEmergency1.mp3", null, audioPrompt);
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

});