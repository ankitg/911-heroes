var serviceModule = angular.module('911-heroes.services', []);

serviceModule.factory('stateService', ['STORAGE', function(STORAGE){
	
	// Order of Modules
	var modules = ['M1', 'M2', 'M3'];

	// Order of Phases for each module
	var phases = {
		'M1': ['M1P1', 'M1P2', 'M1P3'],
		'M2': ['M2P1', 'M2P2', 'M2P3'],
		'M3': ['M3P1', 'M3P2'],
	};

	var NavState = function (module, phase) {
		this.module	= module;
		this.phase 	= phase;
	};

	function getNextNavState(currModule, currPhase) {

		if (!currModule) {
			currModule = modules[0];
		};

		var modPhases = phases[currModule];

		var phaseIndex = modPhases.indexOf(currPhase);

		if (phaseIndex+1 < modPhases.length) {
			// Go to next Phase
			var nextPhase = modPhases[phaseIndex + 1];
			return new NavState(currModule, nextPhase);
		} else {
			// Go to next module
			var moduleIndex = modules.indexOf(currModule);

			if (moduleIndex+1 < modules.length) {

				var nextModule = modules[moduleIndex+1];
				return getNextNavState(nextModule);
			} else {
				return null;
			}
		}

		return null;
	}

	return {

		// CURRENT MODULE

		getCurrentModule: function () {
			return window.localStorage.getItem(STORAGE.CURRENT_MODULE);
		},
		setCurrentModule: function (currModule) {
			window.localStorage.setItem(STORAGE.CURRENT_MODULE, currModule);
		},

		// CURRENT PHASE

		getCurrentPhase: function () {
			return window.localStorage.getItem(STORAGE.CURRENT_PHASE);
		},
		setCurrentPhase: function (currPhase) {
			window.localStorage.setItem(STORAGE.CURRENT_PHASE, currPhase);
		},



		onNext: function () {

			var currModule 	= this.getCurrentModule();
			var currPhase	= this.getCurrentPhase();
			var nextState	= getNextNavState(currModule, currPhase);

			if (!nextState) {
				// All Done!
				return;
			}

			this.setCurrentModule(nextState.module);
			this.setCurrentPhase(nextState.phase);
		}
	};
}]);
