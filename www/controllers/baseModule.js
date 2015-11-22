
function BaseModuleCtrl($scope, $state, idleTimer) {

  $scope.timer = null;

  $scope.$on('$ionicView.enter', function() {

    // No timer for phase 1 of each module
    if(!endsWith($scope.currentPhase, "P1")) {
      $scope.timer = new idleTimer.IdleTimer(promptOnIdle, 15);
    }
  });

  $scope.$on('$ionicView.leave', function() {

    if($scope.timer) {
      $scope.timer.stop();
      $scope.timer = null;
    }
  });

  function promptOnIdle(consecutiveCallbackCount) {

    switch(consecutiveCallbackCount) {
      case 0:
        $scope.$apply(function() {
          $scope.audioPrompt(true);
          $scope.visualPrompt(true);
        });
        break;

      case 1:
        $scope.timer.stop();
        $scope.goToTimeoutScreen();
        break;

      default:
        // NO-OP
        console.log("Warning: should not reach here");
    }
  }

  $scope.audioPrompt = function(isReprompt) {
    // Override in subclass
    console.log("audioPrompt on base class");
  }

  $scope.visualPrompt = function(isReprompt) {
    // Override in subclass
    console.log("visualPrompt on base class");
  }

  /**
   * Check whether the given string ends in the given suffix
   *
   * @param str String to check
   * @param suffix
   * @returns {boolean}
   */
  function endsWith(str, suffix) {
    if( !str || !suffix ) {
      return false;
    }
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
  }
}
