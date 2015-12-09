
//Fields in model - name, tin, address, state, pincode, phone, person, email, active  
app.controller("updateSupplierCtrl", function ($timeout, $location, $scope, $http, Suppliers){

	(function(){
		$scope.supplierModel = Suppliers.supplier;
		if ($scope.supplierModel.name === undefined){
				$location.url("/supplierslist");
		}
	}());


	$scope.updateSupplier = function(){
		Manufacturers.update($scope.mfgsModel)
		.success(function(){				
		})
		.error(function(){
				console.log('Error while updating Manufacturers');
		});
	  // /toastr.success('Manufacturer updated successfully');
	  toastr.success('Changes saved successfully');	
	};

});	