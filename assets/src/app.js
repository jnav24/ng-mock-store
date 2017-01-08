var ng = require('angular'),
	ng_route = require('angular-route'),
	ctrl_dir = './controllers/';

ng.module('store', [ng_route])

.config(['$routeProvider', require('./routes.js')])