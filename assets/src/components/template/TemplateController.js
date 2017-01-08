module.exports = function($scope, $stateParams) {
	$scope.templates = [
		{
			template_id: 1,
			name: 'Blue Template',
			image: 'blue.jpg',
			price: '19.99'
		},
		{
			template_id: 2,
			name: 'Red Template',
			image: 'red.jpg',
			price: '19.99'
		},
		{
			template_id: 3,
			name: 'Green Template',
			image: 'green.jpg',
			price: '19.99'
		}
	];

	$scope.template = {};

	if (typeof $stateParams.templateId !== 'undefined') {
		for (var i = 0; i < $scope.templates.length; i++) {
			if ($scope.templates[i].template_id == $stateParams.templateId) {
				$scope.template = $scope.templates[i];
			}
		}
	}
};