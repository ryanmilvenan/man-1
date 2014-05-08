var bunyan = require('bunyan');

var stream = [
	{
		stream:process.stdout
	},
	{
		path:__dirname + '/full.log'
	}
];

module.exports = stream;