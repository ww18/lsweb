'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _ = _interopDefault(require('lodash'));
var path = _interopDefault(require('path'));

let config = {
	"viewDir": path.join(__dirname, '..','views/'),
	"staticDir": path.join(__dirname, '..','assets'),
	"env": "production",
	"port": 8081
};
//todo 增加了无用的代码，导致当前的逻辑过长，导致代码量大，hot-reload，对代码进行清洗
const init = ()=>{
	{
		const proConfig = {
			port: 8081
		};
		config = _.extend(config, proConfig);
	}
	return config;
};
var index = init();

module.exports = index;
