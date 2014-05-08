/*
*Dependencies
*/
var log = require('../../log');
log.level('debug');
var lights = require('./lights');

var zones = {
	kitchen: true,
	bedroom: true,
	lamp: true,
	den: true,
	entry: true
}

/*
*Exports
*/
module.exports = {
	route: function(transport, request) {
		switch(transport) {
			case 'sms':
				log.debug({REQUEST: request}, "REQUEST");
				if(!request.Body) {
					var msg = "Invalid SMS message received";
					log.error({message: msg}, "PROCESS ROUTER ERROR");
					return;
				}
				var message = request.Body;
				message = message.split(" ");
				var protocol, command, zone = [];
				message.forEach( function(word) {
					switch(word) {
						case 'lights':
							protocol = word;
						break;

						case 'on':
							command = word;
						break;

						case 'off':
							command = word;
						break;

						default: 
							if(zones[word]) {
								zone.push(word);
							}
						break;
					}
				});

				if(protocol == 'lights') {
					lights.manipulate(command, zone);
				}

			break;

			default:
				log.error("BAD SWITCH", transport);
			break;

		}
	}
}
