module.exports = function($urlRouterProvider, $stateProvider) {
	var views_dir = 'assets/src/components/';
	// $urlRouterProvider.otherwise('/404');
	
	$stateProvider.state('home', {
		url: '/',
		templateUrl: views_dir + 'main/main.html',
		controller: 'MainController'
	})
	.state('templates', {
		url: '/templates',
		templateUrl: views_dir + 'template/template.html',
		controller: 'TemplateController'
	})
	.state('template-details', {
		url: '/templates/:templateId',
		templateUrl: views_dir + 'template/template-details.html',
		controller: 'TemplateController'
	});
	// .state('default', {
	// 	url: '/404',
	// 	templateUrl: views_dir + 'default/default.html',
	// 	controller: 'DefaultController'
	// });
};