var controllers = angular.module('911-heroes.controllers', []);

controllers.controller('VideoCtrl', function($scope) {

  $scope.isContinueEnabled = false;

  $scope.$on('$ionicView.leave', function() {
    stopVideo();
  });

  var clapperTop = document.getElementById('clapperTop');
  var clapperBottom = document.getElementById('clapperBottom');

  function clapperDown() {
    clapperTop.classList.add('clapper-down');
  };

  function clapperRemove() {
    clapperTop.classList.add('display-none');
    clapperBottom.classList.add('display-none');
  };

  var clapper = function() {

    var downTime = 250;
    var removeTime = downTime + 1000;
    var playTime = removeTime;

    clapperTop.classList.add('clapper-up');
    setTimeout(clapperDown, downTime);
    setTimeout(clapperRemove, removeTime);
    setTimeout(playVideo, playTime);
  };

  var video = undefined; // Setting only instance of the variable, lighter on memory. ^_^

  var playVideo = function() {
    video = document.getElementById('videoScreen');
    if(!video) {
      return;
    }

    video.play();
    video.onended = function() {

      // Enable the buttons after video has ended
      $scope.$apply(function() {
        $scope.isContinueEnabled = true;
      });
    };
  };

  var stopVideo = function() {
    video = document.getElementById('videoScreen');
    video.pause();
  };

  $scope.playAudio("ModelingVideo.mp3", null, clapper);

  $scope.playVideo = function() {
    video = document.getElementById('videoScreen');
    if (!video) {
      return;
    }
    playVideo();
  };

  $scope.continue = function() {

    if (!$scope.isContinueEnabled && !$scope.isDevMode) {
      return;
    }

    stopVideo();
    $scope.goToNext();
  };
});
