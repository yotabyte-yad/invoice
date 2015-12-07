app.controller("MfgsListCtrl", function ($location, $scope, $http, $rootScope, Manufacturers){
	$scope.mfgsModel = {};

	$scope.GetAllData = function () {
	    //$http.get('http://localhost:5000/mfgs')
	    Manufacturers.getAll()
	    .success(function (data, status, headers, config) {
	        $scope.allMfgs = data;	        
	    })
	    .error(function (data, status, header, config) {
	        $scope.ResponseDetails = "Data: " + data +
	            "<br />status: " + status +
	            "<br />headers: " + jsonFilter(header) +
	            "<br />config: " + jsonFilter(config);
	    }); 	    
	};

	$scope.GetAllData();

	$scope.goToEditScreen = function(id){
		$scope.selectedMfgs = $scope.allMfgs;
		console.log('mfgslist.js', $scope.allMfgs);
		$location.url("/editmfgs/" + id);
	}

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