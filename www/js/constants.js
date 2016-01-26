angular.module('911-heroes.constants', [])

.constant('STORAGE', {
	'CURRENT_NAV_LOCATION': 'currNavLocation',
	'SELECTED_AVATAR':  	'selectedAvatar',
	'CURRENT_USER': 		'currentUser',
})

.constant('SCENARIOS',
	[
      [
        {'id':'00', 'src':'./img/emergencies/fire/fire1.jpg', 'alt':'A fire emergency.', 'type':'Fire', 'is_emergency':true},
        {'id':'01', 'src':'./img/emergencies/fire/fire2.jpg', 'alt':'A fire emergency.', 'type':'Fire', 'is_emergency':true},
        {'id':'02', 'src':'./img/emergencies/fire/fire3.jpg', 'alt':'A fire emergency.', 'type':'Fire', 'is_emergency':true},
        {'id':'03', 'src':'./img/emergencies/fire/fire4.jpg', 'alt':'A fire emergency.', 'type':'Fire', 'is_emergency':true},
        {'id':'04', 'src':'./img/emergencies/fire/fire5.jpg', 'alt':'A fire emergency.', 'type':'Fire', 'is_emergency':true},
      ],

      [
        {'id':'10', 'src':'./img/emergencies/ambulance/ambulance1.jpg', 'alt':'An ambulance emegency.', 'type':'Ambulance', 'is_emergency':true},
        {'id':'11', 'src':'./img/emergencies/ambulance/ambulance2.jpg', 'alt':'An ambulance emegency.', 'type':'Ambulance', 'is_emergency':true},
        {'id':'12', 'src':'./img/emergencies/ambulance/ambulance3.jpg', 'alt':'An ambulance emegency.', 'type':'Ambulance', 'is_emergency':true},
        {'id':'13', 'src':'./img/emergencies/ambulance/ambulance4.jpg', 'alt':'An ambulance emegency.', 'type':'Ambulance', 'is_emergency':true},
        {'id':'14', 'src':'./img/emergencies/ambulance/ambulance5.jpg', 'alt':'An ambulance emegency.', 'type':'Ambulance', 'is_emergency':true},
        {'id':'15', 'src':'./img/emergencies/ambulance/ambulance6.jpg', 'alt':'An ambulance emegency.', 'type':'Ambulance', 'is_emergency':true},
        {'id':'16', 'src':'./img/emergencies/ambulance/ambulance7.jpg', 'alt':'An ambulance emegency.', 'type':'Ambulance', 'is_emergency':true},
        {'id':'17', 'src':'./img/emergencies/ambulance/ambulance8.jpg', 'alt':'An ambulance emegency.', 'type':'Ambulance', 'is_emergency':true},
        {'id':'18', 'src':'./img/emergencies/ambulance/ambulance9.jpg', 'alt':'An ambulance emegency.', 'type':'Ambulance', 'is_emergency':true},
      ],

      [
        {'id':'20', 'src':'./img/emergencies/police/police1.jpg', 'alt':'A police emergency.', 'type':'Police', 'is_emergency':true},
        {'id':'21', 'src':'./img/emergencies/police/police2.jpg', 'alt':'A police emergency.', 'type':'Police', 'is_emergency':true},
        {'id':'22', 'src':'./img/emergencies/police/police3.jpg', 'alt':'A police emergency.', 'type':'Police', 'is_emergency':true},
        {'id':'23', 'src':'./img/emergencies/police/police4.jpg', 'alt':'A police emergency.', 'type':'Police', 'is_emergency':true},
        {'id':'24', 'src':'./img/emergencies/police/police5.jpg', 'alt':'A police emergency.', 'type':'Police', 'is_emergency':true},
        {'id':'25', 'src':'./img/emergencies/police/police6.jpg', 'alt':'A police emergency.', 'type':'Police', 'is_emergency':true},
        {'id':'26', 'src':'./img/emergencies/police/police7.jpg', 'alt':'A police emergency.', 'type':'Police', 'is_emergency':true},
        {'id':'27', 'src':'./img/emergencies/police/police8.jpg', 'alt':'A police emergency.', 'type':'Police', 'is_emergency':true},
        {'id':'28', 'src':'./img/emergencies/police/police9.jpg', 'alt':'A police emergency.', 'type':'Police', 'is_emergency':true},
      ],

      [
        {'id':'30', 'src':'./img/emergencies/nonEmergency/nonEmergency1.jpg', 'alt':'Not an emergency.', 'type':'None', 'is_emergency':false},
        {'id':'31', 'src':'./img/emergencies/nonEmergency/nonEmergency2.jpg', 'alt':'Not an emergency.', 'type':'None', 'is_emergency':false},
        {'id':'32', 'src':'./img/emergencies/nonEmergency/nonEmergency3.jpg', 'alt':'Not an emergency.', 'type':'None', 'is_emergency':false},
        {'id':'33', 'src':'./img/emergencies/nonEmergency/nonEmergency4.jpg', 'alt':'Not an emergency.', 'type':'None', 'is_emergency':false},
        {'id':'34', 'src':'./img/emergencies/nonEmergency/nonEmergency5.jpg', 'alt':'Not an emergency.', 'type':'None', 'is_emergency':false},
        {'id':'35', 'src':'./img/emergencies/nonEmergency/nonEmergency6.jpg', 'alt':'Not an emergency.', 'type':'None', 'is_emergency':false},
        {'id':'36', 'src':'./img/emergencies/nonEmergency/nonEmergency7.jpg', 'alt':'Not an emergency.', 'type':'None', 'is_emergency':false},
        {'id':'37', 'src':'./img/emergencies/nonEmergency/nonEmergency8.jpg', 'alt':'Not an emergency.', 'type':'None', 'is_emergency':false},
      ]
	]
)

.constant('SOUNDS', {
    'CORRECT':    'bell.mp3',
    'INCORRECT':  'buzzer.mp3'
  }
);
