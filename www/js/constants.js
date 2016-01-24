angular.module('911-heroes.constants', [])

.constant('STORAGE', {
	'CURRENT_NAV_LOCATION': 'currNavLocation',
	'SELECTED_AVATAR':  	'selectedAvatar',
	'CURRENT_USER': 		'currentUser',
})

.constant('SCENARIOS',
	[
      [
        {'id':'00', 'src':'./img/emergencies/fire/photo/fire1_x2.jpg', 'alt':'A fire emergency.', 'type':'Fire', 'is_emergency':true},
        {'id':'01', 'src':'./img/emergencies/fire/photo/fire2_x1.jpg', 'alt':'A fire emergency.', 'type':'Fire', 'is_emergency':true},
        {'id':'02', 'src':'./img/emergencies/fire/photo/fire3_x1.jpg', 'alt':'A fire emergency.', 'type':'Fire', 'is_emergency':true},
        {'id':'03', 'src':'./img/emergencies/fire/photo/fire4_x2.jpg', 'alt':'A fire emergency.', 'type':'Fire', 'is_emergency':true},
        {'id':'04', 'src':'./img/emergencies/fire/photo/fire5_x2.jpg', 'alt':'A fire emergency.', 'type':'Fire', 'is_emergency':true},
      ],

      [
        {'id':'10', 'src':'./img/emergencies/ambulance/photo/ambulance1_x1.jpg', 'alt':'An ambulance emegency.', 'type':'Ambulance', 'is_emergency':true},
        {'id':'11', 'src':'./img/emergencies/ambulance/photo/ambulance2_x1.jpg', 'alt':'An ambulance emegency.', 'type':'Ambulance', 'is_emergency':true},
        {'id':'12', 'src':'./img/emergencies/ambulance/photo/ambulance3_x3.jpg', 'alt':'An ambulance emegency.', 'type':'Ambulance', 'is_emergency':true},
        {'id':'13', 'src':'./img/emergencies/ambulance/photo/ambulance4_x3.jpg', 'alt':'An ambulance emegency.', 'type':'Ambulance', 'is_emergency':true},
        {'id':'14', 'src':'./img/emergencies/ambulance/photo/ambulance5_x3.jpg', 'alt':'An ambulance emegency.', 'type':'Ambulance', 'is_emergency':true},
        {'id':'15', 'src':'./img/emergencies/ambulance/photo/ambulance6_x2.jpg', 'alt':'An ambulance emegency.', 'type':'Ambulance', 'is_emergency':true},
        {'id':'16', 'src':'./img/emergencies/ambulance/photo/ambulance7_x2.jpg', 'alt':'An ambulance emegency.', 'type':'Ambulance', 'is_emergency':true},
        {'id':'17', 'src':'./img/emergencies/ambulance/photo/ambulance8_x3.jpg', 'alt':'An ambulance emegency.', 'type':'Ambulance', 'is_emergency':true},
        {'id':'18', 'src':'./img/emergencies/ambulance/photo/ambulance9_x3.jpg', 'alt':'An ambulance emegency.', 'type':'Ambulance', 'is_emergency':true},
      ],

      [
        {'id':'20', 'src':'./img/emergencies/police/photo/police1_x2.jpg', 'alt':'A police emergency.', 'type':'Police', 'is_emergency':true},
        {'id':'21', 'src':'./img/emergencies/police/photo/police2_x2.jpg', 'alt':'A police emergency.', 'type':'Police', 'is_emergency':true},
        {'id':'22', 'src':'./img/emergencies/police/photo/police3_x3.jpg', 'alt':'A police emergency.', 'type':'Police', 'is_emergency':true},
        {'id':'23', 'src':'./img/emergencies/police/photo/police4_x3.jpg', 'alt':'A police emergency.', 'type':'Police', 'is_emergency':true},
        {'id':'24', 'src':'./img/emergencies/police/photo/police5_x1.jpg', 'alt':'A police emergency.', 'type':'Police', 'is_emergency':true},
        {'id':'25', 'src':'./img/emergencies/police/photo/police6_x2.jpg', 'alt':'A police emergency.', 'type':'Police', 'is_emergency':true},
        {'id':'26', 'src':'./img/emergencies/police/photo/police7_x3.jpg', 'alt':'A police emergency.', 'type':'Police', 'is_emergency':true},
        {'id':'27', 'src':'./img/emergencies/police/photo/police8_x3.jpg', 'alt':'A police emergency.', 'type':'Police', 'is_emergency':true},
        {'id':'28', 'src':'./img/emergencies/police/photo/police9_x2.jpg', 'alt':'A police emergency.', 'type':'Police', 'is_emergency':true},
      ],

      [
        {'id':'30', 'src':'./img/emergencies/non-emergency/nonEmergency1_x2.jpg', 'alt':'Not an emergency.', 'type':'None', 'is_emergency':false},
        {'id':'31', 'src':'./img/emergencies/non-emergency/nonEmergency2_x2.jpg', 'alt':'Not an emergency.', 'type':'None', 'is_emergency':false},
        {'id':'32', 'src':'./img/emergencies/non-emergency/nonEmergency3_x1.jpg', 'alt':'Not an emergency.', 'type':'None', 'is_emergency':false},
        {'id':'33', 'src':'./img/emergencies/non-emergency/nonEmergency4_x2.jpg', 'alt':'Not an emergency.', 'type':'None', 'is_emergency':false},
        {'id':'34', 'src':'./img/emergencies/non-emergency/nonEmergency5_x1.jpg', 'alt':'Not an emergency.', 'type':'None', 'is_emergency':false},
        {'id':'35', 'src':'./img/emergencies/non-emergency/nonEmergency6_x1.jpg', 'alt':'Not an emergency.', 'type':'None', 'is_emergency':false},
        {'id':'36', 'src':'./img/emergencies/non-emergency/nonEmergency7_x2.jpg', 'alt':'Not an emergency.', 'type':'None', 'is_emergency':false},
        {'id':'37', 'src':'./img/emergencies/non-emergency/nonEmergency8_x2.jpg', 'alt':'Not an emergency.', 'type':'None', 'is_emergency':false},
      ]
	]
)

.constant('SOUNDS', {
    'CORRECT':    'bell.mp3',
    'INCORRECT':  'buzzer.mp3'
  }
);
