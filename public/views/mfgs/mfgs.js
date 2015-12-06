app.controller("MfgsCtrl", function ($location, $scope, $http, $rootScope){
	//TODO
	$scope.mfgsModel = {};
	$scope.allMfgs = {};
	$scope.order = 'name';
	
	$scope.createMfgs = function() {
		$http.post('/mfgs', $scope.mfgsModel).success(function(response){
			console.log(response);
		})
	};
});	
	