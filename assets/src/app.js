var ng = require('angular'),
	ng_ui_route = require('angular-ui-router'),
	ctrl_dir = './components/';

ng.module('store', [ng_ui_route])

.config(['$urlRouterProvider', '$stateProvider', require('./routes.js')])

.controller('DefaultController', ['$scope', require(ctrl_dir + 'default/DefaultController.js')])
.controller('MainController', ['$scope', require(ctrl_dir + 'main/MainController.js')])
.controller('TemplateController', ['$scope', '$stateParams', require(ctrl_dir + 'template/TemplateController.js')])