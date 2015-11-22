angular.module('911-heroes.controllers', [])

.controller('Module4Ctrl', function($scope, $state, SCENARIOS) {

  //module 1
  function module1() {
    $scope.module1 = true;
    $scope.module2 = false;
    $scope.module3 = false;

    chooseScenario();
  }

  var chooseScenario = function() {
    var chosenScenarioCategoryIndex= Math.floor(Math.random() * 4);
    $scope.scenario = SCENARIOS[chosenScenarioCategoryIndex][Math.floor(Math.random() * SCENARIOS[chosenScenarioCategoryIndex].length)];
  };

  module1();

  $scope.validateAnswer = function(answer) {
    if(answer === $scope.scenario.is_emergency) {
      module2();
    } else {
      module1();
    }
  };

  //module 2
  function module2() {
    $scope.module1 = false;
    $scope.module2 = true;
    $scope.module3 = false;

    $scope.lockscreen = true;
  }

  $scope.goToDialpad = function() {
    $scope.lockscreen = false;
    clearKeypad();
  };

  var keyCount = 0;
  var clearKeypad = function() {
    $scope.dialedNumber = "";
    keyCount = 0;
  };

  var validateAnswer2 = function(key) {
    if ((keyCount === 1 && $scope.dialedNumber === "9") || (keyCount === 2 && $scope.dialedNumber === "91") || (keyCount === 3 && $scope.dialedNumber === "911") || (keyCount === 4 && $scope.dialedNumber === "911" && key === "call"))
      { return true; }
    else
      { return false; }
  };

  $scope.dialPadKeyPressed = function(key) {
    keyCount++;

    // Update the dial screen.
    if(key === "bksp") {
      $scope.dialedNumber = $scope.dialedNumber.slice(0, - 1);
    } else if(key === "contacts" || key === "call") {
    } else {
      $scope.dialedNumber += key;
    }

    if(validateAnswer2(key)) {
      if(key === "call") {
        module3();
      }
    } else {
      module2();
    }

  };

  //module 3
  function module3() {
    $scope.module1 = false;
    $scope.module2 = false;
    $scope.module3 = true;

    $scope.calling = true;

    $scope.playAudio('Operator1.mp3', null, function() { // Now hold the phone to your ear
      $scope.playAudio('PhoneRinging.mp3', null, function() { // Ring ring
        $scope.playAudio('Operator2.mp3', null, function() { // Do you need fire, ambulance or police?
          voiceInput(voiceRecog1,errorCallback,Operator2);
        });
      });
    });

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
      $scope.playAudio('Operator3.mp3', null, function(){ // What is your name?
        setTimeout(Operator3, 3000);
      });
    }


    function Operator3() {
      $scope.playAudio('Operator4.mp3', null, function(){ // What is your address?
        setTimeout(Operator4, 3000);
      });
    }


    function Operator4() {
      $scope.playAudio('Operator5.mp3', null, function(){ // What is your situation?
        setTimeout(Operator5, 3000);
      });
    }


    function Operator5() {
      $scope.playAudio('Operator6.mp3', null, function(){ // Are you safe?
        setTimeout(Operator6, 3000);
      });
    }


    function Operator6() {
      $scope.playAudio('Operator7.mp3', null, function(){ // Don't hang up!
        // $state.go('main.levelUp');
      });
    }

  }

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
    } else {
      onSuccess();
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

});