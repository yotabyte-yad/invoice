app.controller("mfgsEditCtrl", function ($location, $scope, $http, $rootScope, $routeParams){
	console.log($routeParams);

	 $scope.updateManufacturer = function (id) {
	 		var manufacturer;
	 		for (var i = 0; i < $scope.allMfgs.length; i++) {
        var currManu = $scope.allMfgs[i];
        if (currManu.id === id) {
            manufacturer = currManu;
            break;
        }
    	}	
   }

   $scope.updateCustomer = function (id) {
    var cust;
    for (var i = 0; i < $scope.customers.length; i++) {
        var currCust = $scope.customers[i];
        if (currCust.ID === id) {
            cust = currCust;
            break;
        }
    }

    dataFactory.updateCustomer(cust)
      .success(function () {
          $scope.status = 'Updated Customer! Refreshing customer list.';
      })
      .error(function (error) {
          $scope.status = 'Unable to update customer: ' + error.message;
      });
};     

});	