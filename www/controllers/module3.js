angular.module('911-heroes.controllers', [])

.controller('Module3Ctrl', function($scope, $state, SCENARIOS) {

  function transitionToCall() {
  	chooseScenario(); // Choose a new scenario everytime module 3 is loaded
  	window.setTimeout(callLogic, 5000);
  }

  transitionToCall();

  function chooseScenario() {
    var chosenScenarioCategoryIndex = Math.floor(Math.random() * (SCENARIOS.length - 1)); // Random index between 0 and SCENARIOS.length (which is one more than actual index, due it arrays being zero-indexed)
    var chosenScenarioCategory = SCENARIOS[chosenScenarioCategoryIndex]; // Chosen category of scenarios, any but last - non-emergrncy
    var chosenScenarioIndex = Math.floor(Math.random() * (chosenScenarioCategory.length + 1)); // Index of chosen scenario with the chosen category

    $scope.scenario = chosenScenarioCategory[chosenScenarioIndex];
    console.log($scope.scenario);
  }

  $scope.video   = true ;
  $scope.dialpad = false;
  $scope.calling = false;

/*******/
/* TTS */
/*******/

  function TTS(stringToBeSpoken, onSuccess){
	if(window.TTS) {
	  window.TTS.speak(stringToBeSpoken, function () {
	    console.log("TTS: " + stringToBeSpoken);
	    if(onSuccess) { onSuccess(); }
	  }, function (reason) {
	    console.error("TTS FAILED: " + reason);
	  });
	}
  }

  function voicePrompt(filename, func) {
  	// Add check for audio prompts
	if ($scope.currentPhase === "M3P1") {
	  $scope.playAudio(filename, null, func);
	} else {
	  func();
	}
  }

/*********************/
/* Voice Recognition */
/*********************/

  function startRecognition() {
  	var maxMatches = 1;
    var language = "en-US";
    window.plugins.speechrecognizer.start(resultCallback, errorCallback, maxMatches, language);
  }

  function stopRecognition(successCallback, failureCallback) {
  	if(successCallback === undefined) {successCallback = resultCallback;}
  	if(failureCallback === undefined) {failureCallback = errorCallback ;}
    window.plugins.speechrecognizer.stop(successCallback, failureCallback);
  }

  function resultCallback(result) {
  	if(result && result.results) {console.log(result.results[0][0].transcript);}
  }

  function errorCallback(error) {
    console.error(error);
  }

  function voiceInput(success, failure, next) {
  	if(window.plugins && window.plugins.speechrecognizer) {
  	  startRecognition();
  	  setTimeout(function(){stopRecognition(success,failure);}, 3000);
  	} else {
  	  next();
  	}
  }

/****************/
/* Module Logic */
/****************/

  function callLogic() {

  	$scope.video   = false;
    $scope.dialpad = false;
    $scope.calling = true ;

    if($scope.video)   {}
    if($scope.dialpad) {} // No dialpad on module 3.

    if($scope.calling) {
      $scope.playAudio('Operator1.mp3', null, function() { // Now hold the phone to your ear
    	$scope.playAudio('PhoneRinging.mp3', null, function() { // Ring ring
    	  $scope.playAudio('Operator2.mp3', null, function() { // Do you need fire, ambulance or police?
    	  	voicePrompt ($scope.scenario.type+'.mp3', function(){
    	  	  voiceInput(voiceRecog1,errorCallback,Operator2);
    	  	});
    	  });
    	});
      });
    }

    function voiceRecog1(result) {
      var recognizedText = result.results[0][0].transcript;
      console.log("You said " + recognizedText);
      if(recognizedText.toLowerCase().indexOf($scope.scenario.type.toLowerCase()) !== -1) {
      	// We found what we were looking for in what you said!
      	console.log("\""+recognizedText+"\" does contain \""+$scope.scenario.type+"\"");
      }
      Operator2();
    }



    function Operator2() {
      $scope.playAudio('Operator3.mp3', null, voicePrompt2); // What is your name?
    }

    function voicePrompt2() {
      // Add check for audio prompts
      if($scope.currentPhase === "M3P1") {
      	// TODO: replace hardcoded value with value from localStorage
		TTS("USER NAME", voiceInput2); // Name of the current user
      } else {
        voiceInput2();
      }
    }

   function voiceInput2() {
      // TODO: voice recognition
      console.log("Do voice recog. here for the user's name");
      setTimeout(Operator3, 3000);
    }



    function Operator3() {
      $scope.playAudio('Operator4.mp3', null, voicePrompt3); // What is your address?
    }

    function voicePrompt3() {
      // Add check for audio prompts
      if($scope.currentPhase === "M3P1") {
        // TODO: replace hardcoded value with value from localStorage
        TTS("USER ADDRESS", voiceInput3); // Addess of the current user
      } else {
        voiceInput3();
      }
    }

   function voiceInput3() {
      // TODO: voice recognition
      console.log("Do voice recog. here for the user's address");
      setTimeout(Operator4, 3000);
    }




   function Operator4() {
      $scope.playAudio('Operator5.mp3', null, voicePrompt4); // What is your situation?
    }

    function voicePrompt4() {
      // Add check for audio prompts
      if($scope.currentPhase === "M3P1") {
        // TODO: replace hardcoded value with ?
        TTS("USER'S SITUATION", voiceInput4); // Situation of the current user
      } else {
        voiceInput4();
      }
    }

   function voiceInput4() {
      // TODO: voice recognition
      console.log("Do voice recog. here for the user's situation");
      setTimeout(Operator5, 3000);
    }





   function Operator5() {
      $scope.playAudio('Operator6.mp3', null, voicePrompt5); // Are you safe?
    }

    function voicePrompt5() {
      // Add check for audio prompts
      if($scope.currentPhase === "M3P1") {
        // TODO: replace hardcoded value with ?
        TTS("Yes!", voiceInput5); // The user is always safe!
      } else {
        voiceInput5();
      }
    }

   function voiceInput5() {
      // TODO: voice recognition
      console.log("Do voice recog. here for if the user's safe or not");
      setTimeout(Operator6, 3000);
    }





    function Operator6() {
      $scope.playAudio('Operator7.mp3', null, voicePrompt6); // Don't hang up!
    }

    function voicePrompt6() {
      // Add check for audio prompts
      if($scope.currentPhase === "M3P1") {
        $scope.playAudio("Operator8.mp3", null, levelUp);
      } else {
        levelUp();
      }
    }

    function levelUp() {
      $state.go('main.levelUp');
    }

  }

});