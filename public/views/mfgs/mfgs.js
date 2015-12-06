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

	$scope.SearchData = function () {
            var parameters = {
                q: $scope.keyword
            };
            var config = {
                params: parameters
            };

            $http.get('http://localhost:5000/mfgs', config)
            .success(function (data, status, headers, config) {
                $scope.Details = data;
            })
            .error(function (data, status, header, config) {
                $scope.ResponseDetails = "Data: " + data +
                    "<hr />status: " + status +
                    "<hr />headers: " + header +
                    "<hr />config: " + config;
            });
        };
});	
	