app.controller("MfgsCtrl", function ($location, $scope, $http, $rootScope){
	//TODO
	$scope.mfgsModel = {};
	$scope.allMfgs = {};
	$scope.order = 'name';
	

	$scope.GetAllData = function () {
	    $http.get('http://localhost:5000/mfgs')
	    .success(function (data, status, headers, config) {
	        $scope.allMfgs = data;
	    })
	    .error(function (data, status, header, config) {
	        $scope.ResponseDetails = "Data: " + data +
	            "<br />status: " + status +
	            "<br />headers: " + jsonFilter(header) +
	            "<br />config: " + jsonFilter(config);
	    });
	    console.log('got data');
	};

	$scope.GetAllData();

	$scope.createMfgs = function() {
		//console.log('from controller', $scope.mfgsModel);
		$http.post('/mfgs', $scope.contact).success(function(response){
			console.log(response);
			refresh();
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

		// var refresh = function(){
		// 		console.log(parameters);
		// 		$http({
		// 			url: 'http://localhost:5000/mfgs',
		// 			method: 'GET',
		// 			params: {q : parameters}
		// 		});

				// $http.get('http://localhost:5000/mfgs').success(function (response){
				// 	console.log("Got the requested data");
				// 	console.log(response);
				// 	$scope.allMfgs = response;					
				// });
		// 	};
		// //fetch all the mfgs on page load
		// refresh();	
});	
	