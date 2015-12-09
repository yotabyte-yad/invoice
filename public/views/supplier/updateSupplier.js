
//Fields in model - name, tin, address, state, pincode, phone, person, email, active  
app.controller("updateSupplierCtrl", function ($timeout, $location, $scope, $http, Suppliers){

	(function(){
		$scope.supplierModel = Suppliers.supplier;
		if ($scope.supplierModel.name === undefined){
				$location.url("/supplierslist");
		}
	}());

});	