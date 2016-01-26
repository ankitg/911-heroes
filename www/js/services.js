var serviceModule = angular.module('911-heroes.services', []);

serviceModule.factory('stateService', ['STORAGE', function(STORAGE){

	// Order of Modules
	var modules = ['Pre', 'Vid', 'M1', 'M2', 'M3', 'M4', 'Fin'];

	// Order of Phases for each module
	var phases = {
		'Pre':['avatar', 'start'],
		'Vid': ['video'],
		'M1': ['M1P1', 'M1P2', 'M1P3'],
		'M2': ['M2P1', 'M2P2', 'M2P3'],
		'M3': ['M3P1', 'M3P2'],
		'M4': ['M4P1'],
		'Fin': ['final'],
	};

	var phaseToStateMap = {
		'avatar': 'main.avatar',
		'start': 'main.start',
		'video': 'main.video',
		'final': 'main.final'
	};

	var moduleToStateMap = {
		'M1': 'main.module1',
		'M2': 'main.module2',
		'M3': 'main.module3',
		'M4': 'main.module4',
	};

	/**
	 * Represents a navigation location by the modules and phases.
	 * 'Modules' are sections of the app, often a specific learning activity.
	 * 'Phases' are the various levels within a module (ex. increasing difficulties)
	 *
	 * These are related to angular's routing system using the state and stateParams.
	 * @constructor
	 */
	var NavLocation = function (module, phase, state, stateParams) {
		this.module	= module;
		this.phase 	= phase;
		this.state	= state;
		this.stateParams = stateParams;
	};

	function findState(module, phase) {

		// state for the phase
		var state = phaseToStateMap[ phase ];

		if (!state) {
			// Fall back on state for the module
			state = moduleToStateMap[ module];
		} 

		return state;
	}

	return {

		/**
		 Object defined within the stateService. Use `new` to create new ones.
		 */
		NavLocation: NavLocation,

		// CURRENT NAV LOCATION

		setCurrentNavLocation: function (currNavLocation) {
			window.localStorage.setItem(STORAGE.CURRENT_NAV_LOCATION, JSON.stringify(currNavLocation));
		},
		getCurrentNavLocation: function () {
			var navLocationString = window.localStorage.getItem(STORAGE.CURRENT_NAV_LOCATION);
			if (navLocationString) {
				return JSON.parse(navLocationString);
			}
			return null;
		},

		/**
		 * Gets the follow navLocation
		 *
		 * @param navLocation	optional, if not provided, it will use the current nav location
		 * @returns	NavLocation
		 */
		getNextNavLocation: function (navLocation) {

			if (!navLocation) {
				// Find Saved
				navLocation = this.getCurrentNavLocation();

				if (!navLocation) {
					// No saved location, go to beginning
					navLocation = new NavLocation(modules[0], null, null);
				}
			}

			var modPhases = phases[navLocation.module];

			var phaseIndex = modPhases.indexOf(navLocation.phase);

			if (phaseIndex+1 < modPhases.length) {
				// Go to next Phase
				var nextPhase = modPhases[phaseIndex + 1];
				var state = findState(navLocation.module, nextPhase);
				return new NavLocation(navLocation.module, nextPhase, state);
			} else {
				// Go to next module
				var moduleIndex = modules.indexOf(navLocation.module);

				if (moduleIndex+1 < modules.length) {

					var nextModule = modules[moduleIndex+1];
					var aNavLocation = new NavLocation(nextModule, null, null);
					return this.getNextNavLocation(aNavLocation);
				} else {
					return null;
				}
			}

			return null;
		},

		getNavLocationForLaunch: function() {
			var lastLocation = this.getCurrentNavLocation();
			if (lastLocation) {
				// start screen
				return new NavLocation(null, null, 'main.start', {isLaunch: true});
			} else {
				// login
				return new NavLocation(null, null, 'main.login');
			}
		},

		getNextNavLocationForStartPage: function(isLaunch) {

			var nextLocation;

			if (isLaunch) {
				var lastLocation = this.getCurrentNavLocation();

				// When restarting, we go back to the beginning of the module
				var modOnlyLocation = new NavLocation(lastLocation.module, null, null);
				nextLocation = this.getNextNavLocation( modOnlyLocation );

			} else {
				nextLocation = this.getNextNavLocation();
			}

			return nextLocation;
		},

		/**
		 * Returns a NavLocation pointing to the phase that occurs before navLocation in its module.
		 * Returns the same phase as navLocation if it is the first phase in that module.
		 *
		 * @param {NavLocation=} navLocation - If undefined, will use location defined by `getCurrentNavLocation`
		 * @returns {NavLocation}
		 * */
		getNavLocationForPreviousPhase: function (navLocation) {

			if (!navLocation) {
				// Find Saved
				navLocation = this.getCurrentNavLocation();
			}

			var modPhases = phases[navLocation.module];

			var phaseIndex = modPhases.indexOf(navLocation.phase);

			if (phaseIndex > 0) {
				// Return previous phase
				var prevPhase = modPhases[phaseIndex - 1];
				var state = findState(navLocation.module, prevPhase);
				return new NavLocation(navLocation.module, prevPhase, state);
			} else {
				// Return current phase, because it is the first
				return navLocation;
			}
		},

		getNavLocationForTimeoutPage: function() {
			return new NavLocation(null, null, 'main.timeOut', null);
		},
	};
}]);

serviceModule.service('avatarService', ['STORAGE', function(STORAGE) {

  var setAvatar = function(selectedAvatar) {
  	window.localStorage.setItem(STORAGE.SELECTED_AVATAR, JSON.stringify(selectedAvatar));
  };

  var getAvatar = function(){
  	if(window.localStorage.getItem(STORAGE.SELECTED_AVATAR)) {
		return JSON.parse(window.localStorage.getItem(STORAGE.SELECTED_AVATAR));
	} else {
		return {
		    name: 'blank',
		    type: "Girl",
		    hands_on_hips: './img/question_mark.png',
		    point_screen_right: './img/question_mark.png',
		    point_screen_left: './img/question_mark.png',
		    background: './img/question_mark.png',
		    one_thumbs_up: './img/question_mark.png',
		    phone_up: './img/question_mark.png',
		    practice_again_sad: './img/question_mark.png',
		    two_thumbs_up_star: './img/question_mark.png',
		    two_thumbs_up: './img/question_mark.png',
		    popcorn: './img/question_mark.png'
		};
	}
  };

  return {
  	setAvatar: setAvatar,
  	getAvatar: getAvatar
  };

}]);

serviceModule.service('idleTimer', ['$interval', function ($interval) {

	/**
	 * Callback for idle timer.
	 * @callback IdleTimer~callback
	 * @param {number} [consecutiveCallbackCount] - Number of consecutive times that callback has fired without a nudge
	 */

	/**
	 * Idle Timer. Calls back a function if a given duration has passed without being nudged. Starts automatically when
	 * instantiated.
	 *
	 * @param {IdleTimer~callback} callback
	 * @param {number}[duration=15] - seconds of inactivity before callback is triggered
	 * @param {boolean}[shouldStopOnCallback=false] - if true, timer will be stopped upon first callback
	 * @constructor
	 */
	var IdleTimer = function(callback, duration, shouldStopOnCallback) {

		//== PUBLIC

		this.stop = function() {
			$interval.cancel(timer);
		};

		this.nudge = function() {
			idleTime = 0;
			consecutiveCallbackCount = 0;
		}

		//== PRIVATE

		var idleTime = 0;

		/** Number of consecutive times that callback has fired without a nudge. */
		var consecutiveCallbackCount = 0; //
		var timer;

		if(!duration) {
			duration = 15;
		}

		if(!shouldStopOnCallback) {
			shouldStopOnCallback = false;
		}

		timer = $interval(onTimerTicked, 1000, 0, false);

		// save `this` as a variable so it can be passed into the scope of `onTimerTicked`
		var context = this;

		function onTimerTicked() {

			idleTime++;

			if(idleTime >= duration) {

				// reset timer
				idleTime = 0;

				if(shouldStopOnCallback) {
					context.stop();
				}

				if(callback) {
					callback(consecutiveCallbackCount);
					consecutiveCallbackCount++;
				}
			}
		}
	}

	return {

		/**
		 * Idle Timer object. Use `new` to create a new one.
		 */
		IdleTimer: IdleTimer,
	};
}]);

serviceModule.service('utilities', function() {
	// Keeps track of the flashing item (and related properties)
	var flashing = {
		// "element":"", 	// A handle to the element for resetting the background style.
		// "background":"",	// A handle to the original background style of the element.
		// "interval":""	// A handle to the interval so it may be cleared.
	};

	var flash = function(elementId, red, green, blue, interval) {
		// Set the defaults
		red 	 = typeof red 		!== 'undefined' ? red 	   : 0;
		green 	 = typeof green 	!== 'undefined' ? green    : 255;
		blue 	 = typeof blue 		!== 'undefined' ? blue 	   : 0;
		interval = typeof interval 	!== 'undefined' ? interval : 10;

		var ofs = 0;
		var el = document.getElementById(elementId);

		if(el) {
			// Clear currently flashing item (if any)
			clearFlashing();

			flashing.element = el;
			flashing.background = el.style.background;
		  	flashing.interval = window.setInterval(function(){
			  el.style.background = 'rgba('+red+','+green+','+blue+','+Math.abs(Math.sin(ofs))+')';
			  ofs += 0.01;
			}, interval);
		}
	};

	var clearFlashing = function() {
		if(flashing.interval) {
			window.clearInterval(flashing.interval);
			flashing.element.style.background = flashing.background;
			flashing = {};
		}
	};

	return {
		flash:			flash,
		clearFlashing: 	clearFlashing
	};
});