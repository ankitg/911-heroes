angular.module('911-heroes.controllers', [])

.controller('Module1Ctrl', function($scope) {

  var scenarios = [
    [
      {'id':'00', 'src':'./img/emergencies/fire/photo/fire1_x2.jpg', 'alt':'A fire emergency.', 'type':'fire', 'is_emergency':true},
      {'id':'01', 'src':'./img/emergencies/fire/photo/fire2_x1.jpg', 'alt':'A fire emergency.', 'type':'fire', 'is_emergency':true},
      {'id':'02', 'src':'./img/emergencies/fire/photo/fire3_x1.jpg', 'alt':'A fire emergency.', 'type':'fire', 'is_emergency':true},
      {'id':'03', 'src':'./img/emergencies/fire/photo/fire4_x2.jpg', 'alt':'A fire emergency.', 'type':'fire', 'is_emergency':true},
      {'id':'04', 'src':'./img/emergencies/fire/photo/fire5_x2.jpg', 'alt':'A fire emergency.', 'type':'fire', 'is_emergency':true},
    ],

    [
      {'id':'10', 'src':'./img/emergencies/ambulance/photo/ambulance1_x2.jpg', 'alt':'An ambulance emegency.', 'type':'ambulance', 'is_emergency':true},
      {'id':'11', 'src':'./img/emergencies/ambulance/photo/ambulance2_x1.jpg', 'alt':'An ambulance emegency.', 'type':'ambulance', 'is_emergency':true},
      {'id':'12', 'src':'./img/emergencies/ambulance/photo/ambulance3_x3.jpg', 'alt':'An ambulance emegency.', 'type':'ambulance', 'is_emergency':true},
      {'id':'13', 'src':'./img/emergencies/ambulance/photo/ambulance4_x3.jpg', 'alt':'An ambulance emegency.', 'type':'ambulance', 'is_emergency':true},
      {'id':'14', 'src':'./img/emergencies/ambulance/photo/ambulance5_x3.jpg', 'alt':'An ambulance emegency.', 'type':'ambulance', 'is_emergency':true},
      {'id':'15', 'src':'./img/emergencies/ambulance/photo/ambulance6_x2.jpg', 'alt':'An ambulance emegency.', 'type':'ambulance', 'is_emergency':true},
      {'id':'16', 'src':'./img/emergencies/ambulance/photo/ambulance7_x2.jpg', 'alt':'An ambulance emegency.', 'type':'ambulance', 'is_emergency':true},
      {'id':'17', 'src':'./img/emergencies/ambulance/photo/ambulance8_x3.jpg', 'alt':'An ambulance emegency.', 'type':'ambulance', 'is_emergency':true},
      {'id':'18', 'src':'./img/emergencies/ambulance/photo/ambulance9_x3.jpg', 'alt':'An ambulance emegency.', 'type':'ambulance', 'is_emergency':true},
    ],

    [
      {'id':'20', 'src':'./img/emergencies/police/photo/police1_x2.jpg', 'alt':'A police emergency.', 'type':'police', 'is_emergency':true},
      {'id':'21', 'src':'./img/emergencies/police/photo/police2_x2.jpg', 'alt':'A police emergency.', 'type':'police', 'is_emergency':true},
      {'id':'22', 'src':'./img/emergencies/police/photo/police3_x3.jpg', 'alt':'A police emergency.', 'type':'police', 'is_emergency':true},
      {'id':'23', 'src':'./img/emergencies/police/photo/police4_x3.jpg', 'alt':'A police emergency.', 'type':'police', 'is_emergency':true},
      {'id':'24', 'src':'./img/emergencies/police/photo/police5_x1.jpg', 'alt':'A police emergency.', 'type':'police', 'is_emergency':true},
      {'id':'25', 'src':'./img/emergencies/police/photo/police6_x2.jpg', 'alt':'A police emergency.', 'type':'police', 'is_emergency':true},
      {'id':'26', 'src':'./img/emergencies/police/photo/police7_x3.jpg', 'alt':'A police emergency.', 'type':'police', 'is_emergency':true},
      {'id':'27', 'src':'./img/emergencies/police/photo/police8_x3.jpg', 'alt':'A police emergency.', 'type':'police', 'is_emergency':true},
    ],

    [
      {'id':'30', 'src':'./img/emergencies/non-emergency/Non-Emergency 1.jpg', 'alt':'Not an emergency.', 'type':'none', 'is_emergency':false},
      {'id':'31', 'src':'./img/emergencies/non-emergency/Non-Emergency 2.jpg', 'alt':'Not an emergency.', 'type':'none', 'is_emergency':false},
      {'id':'32', 'src':'./img/emergencies/non-emergency/Non-Emergency 3.jpg', 'alt':'Not an emergency.', 'type':'none', 'is_emergency':false},
      {'id':'33', 'src':'./img/emergencies/non-emergency/Non-Emergency 4.jpg', 'alt':'Not an emergency.', 'type':'none', 'is_emergency':false},
      {'id':'34', 'src':'./img/emergencies/non-emergency/Non-Emergency 5.jpg', 'alt':'Not an emergency.', 'type':'none', 'is_emergency':false},
      {'id':'35', 'src':'./img/emergencies/non-emergency/Non-Emergency 6.jpg', 'alt':'Not an emergency.', 'type':'none', 'is_emergency':false},
      {'id':'36', 'src':'./img/emergencies/non-emergency/Non-Emergency 7.jpg', 'alt':'Not an emergency.', 'type':'none', 'is_emergency':false},
      {'id':'37', 'src':'./img/emergencies/non-emergency/Non-Emergency 8.jpg', 'alt':'Not an emergency.', 'type':'none', 'is_emergency':false},
    ]
  ];

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
    var chosenScenario = Math.floor(Math.random() * (scenarios[scenarioSetCategories[index]].length));
    while (scenarios[scenarioSetCategories[index]][chosenScenario].id in scenarioSet)
    {
      chosenScenario = Math.floor(Math.random() * (scenarios[scenarioSetCategories[index]].length));
    }
    scenarioSet[scenarios[scenarioSetCategories[index]][chosenScenario].id] = scenarios[scenarioSetCategories[index]][chosenScenario];
    scenarioSetArray[index] = scenarios[scenarioSetCategories[index]][chosenScenario];
  }

  var currentIndex = 0;
  $scope.scenario = scenarioSetArray[currentIndex];

  $scope.validateAnswer = function(answer) {
    if(answer === scenarioSetArray[currentIndex].is_emergency) {
      $scope.scores[currentIndex] = { 'state':'pass' };
    }
    else {
      $scope.scores[currentIndex] = { 'state':'fail' };
    }

    if(currentIndex < scenarioSetArray.length - 1) {
      currentIndex++;
      $scope.scenario = scenarioSetArray[currentIndex];
      audioPrompt();
      $scope.scores[currentIndex] = { 'state':'current' };
    }
  };

  function audioPrompt() {
    // Add check for audio prompts
    if($scope.scenario.is_emergency) { $scope.playAudio('IdentifyingEmergency2.mp3'); }
    else { $scope.playAudio('IdentifyingEmergency3.mp3'); }
  }

  $scope.playAudio("IdentifyingEmergency1.mp3", null, audioPrompt);

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