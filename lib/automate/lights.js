/*
*Dependencies
*/
var log = require('../../log');
var request = require('request');

function configureHueOptions(conf) {
	var url = 'http://192.168.1.101/api/mangrove-1';
	if(conf.namespace) {
		url = url + conf.namespace;
	}

	var options = {
		url: url,
		json: conf.state
	}
	return options;
}


/*
*Exports
*/
module.exports = {
	manipulate: function(command, zone) {
		if(zone.length) {

		} else {
			switch(command) {
				case 'on':
					var conf = {
						namespace: '/groups/1/action',
						state: {"on": true }
					}
					var options = configureHueOptions(conf);
					request.put(options, function(error, response, body) {
						log.debug({Response: body}, "HUE");
					});
				break;

				case 'off':
					var conf = {
						namespace: '/groups/1/action',
						state: {"on": false }
					}
					var options = configureHueOptions(conf);
					request.put(options, function(error, response, body) {
						log.debug({Response: body}, "HUE");
					});
				break;

				default:
				break;
			}
		}
	}
}