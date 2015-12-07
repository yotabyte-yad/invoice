app.controller("supplierListCtrl", function ($location, $scope, $http, Suppliers){
	$scope.supplierModel = {};
	$scope.allSuppliers = {};
	$scope.search = {};

		$scope.GetAllData = function () {
	    Suppliers.getAll()
	    .success(function (data, status, headers, config) {
	        $scope.allSuppliers = data;
	        console.log(data);	        
	    })
	    .error(function (data, status, header, config) {
	        $scope.ResponseDetails = "Data: " + data +
	            "<br />status: " + status +
	            "<br />headers: " + jsonFilter(header) +
	            "<br />config: " + jsonFilter(config);
	    });
	};

	$scope.GetAllData();


});