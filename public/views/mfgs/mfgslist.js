app.controller("MfgsListCtrl", function ($location, $scope, $http, $rootScope){

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
	    toastr.warning('Success, list is displayed');
	};

	$scope.GetAllData();
		
});