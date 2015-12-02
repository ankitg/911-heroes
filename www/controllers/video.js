angular.module('911-heroes.controllers', [])

.controller('VideoCtrl', function($scope) {

  $scope.clapperboard = true;

  $scope.hideClapperboard = function() {
    $scope.clapperboard = false;
  };

  var clapperTop = document.getElementById('clapperTop');
  var clapperBottom = document.getElementById('clapperBottom');

  function clapperDown() {
    clapperTop.classList.add('clapper-down');
  };

  function clapperRemove() {
    clapperTop.classList.add('display-none');
    clapperBottom.classList.add('display-none');
  }

  var clapper = function() {
    clapperTop.classList.add('clapper-up');
    setInterval(clapperDown, 1000);
    setInterval(clapperRemove, 2500);
    setInterval(playVideo, 2500);
  }


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

  $scope.playAudio("ModelingVideo.mp3", null, clapper);

  $scope.playVideo = function() {
    playVideo();
  };

  $scope.continue = function() {
    stopVideo();
    $scope.goToNext();
  };

});