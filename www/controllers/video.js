angular.module('911-heroes.controllers', [])

.controller('VideoCtrl', function($scope) {

  $scope.clapperboard = true;

  $scope.hideClapperboard = function() {
    $scope.clapperboard = false;
  };

  var video = undefined; // Setting only instance of the variable, lighter on memory. ^_^
  var playVideo = function() {
    video = document.getElementById('videoScreen');
    video.play();
    video.onended = function() { console.log("ENABLE ALL THE BUTTONS NOW!"); }; // Enable the buttons after video has ended
  };
  var stopVideo = function() {
    video = document.getElementById('videoScreen');
    video.pause();
  };

  $scope.playAudio("ModelingVideo.mp3", null, playVideo);

  $scope.playVideo = function() {
    playVideo();
  };

  $scope.continue = function() {
    stopVideo();
    $scope.goToNext();
  };

});