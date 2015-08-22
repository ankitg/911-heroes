angular.module('911-heroes.controllers', [])

.controller('VideoCtrl', function($scope, avatarService) {

  $scope.clapperboard = true;

  $scope.hideClapperboard = function() {
    $scope.clapperboard = false;
  };

  $scope.selectedAvatar = avatarService.getAvatar();

  var video = undefined;
  var audio = undefined;

  var choreography = function() {
    video = document.getElementById('videoScreen');
    audio = document.getElementById('audioClip');
    audio.src = "./audio/"+$scope.selectedAvatar.type+"/ModelingVideo.mp3"; // Set audio source to (fe)male voice according to the selected avatar
    audio.load();
    setTimeout(function(){audio.play();},0); // Doesn't work without the timeout ¯\_(ツ)_/¯
    audio.onended = function(e){ video.play(); }; // Play the video after audio has ended
    video.onended = function(e){ console.log("ENABLE ALL THE BUTTONS NOW!"); }; // Enable the buttons after video has ended
  }();

  $scope.playVideo = function() {
    console.log("Play Video");
    video.play();
  };

});