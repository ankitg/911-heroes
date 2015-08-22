var serviceModule = angular.module('911-heroes.services', []);

serviceModule.factory('stateService', ['STORAGE', function(STORAGE){

	// Order of Modules
	var modules = ['Pre', 'M1', 'M2', 'M3'];

	// Order of Phases for each module
	var phases = {
		'Pre':['login', 'avatar'],
		'M1': ['M1P1', 'M1P2', 'M1P3'],
		'M2': ['M2P1', 'M2P2', 'M2P3'],
		'M3': ['M3P1', 'M3P2'],
	};

	var phaseToStateMap = {
		'login':  'main.login',
		'avatar': 'main.avatar',
	};

	var moduleToStateMap = {
		'M1': 'main.module1',
		'M2': 'main.module2',
		'M3': 'main.module3',
	};

	var NavLocation = function (module, phase, state) {
		this.module	= module;
		this.phase 	= phase;
		this.state	= state;
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
		}
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
		return {};
	}
  };

  return {
  	setAvatar: setAvatar,
  	getAvatar: getAvatar
  };

}]);