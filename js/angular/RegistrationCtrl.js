function RegistrationCtrl($scope, $http, $templateCache) {

	server = 'http://localhost:5000/';
	server_register = server + 'api/register';

	$scope.register = function() {
		$http({method: 'GET', url: server_register, cache: $templateCache}).
			success(function(data, status) {
				alert('success');
				alert(data);
				alert(status);
			}).
			error(function(data, status) {
				alert('error');
				alert(data);
				alert(status);
			});
	};
}