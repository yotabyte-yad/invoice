//Test

//Fields in model - name, tin, address, state, pincode, phone, person, email, active  
app.controller("createSupplierCtrl", function ($location, $scope, $http, Suppliers){
	$scope.supplierModel = {};
	$scope.supplierModel.active = 1;
	$scope.allMfgs = {};
	$scope.order = 'name';

	$scope.createSupplier = function(){

		Suppliers.create($scope.supplierModel)
		.success(function(response){
					toastr.success('Supplier <b>' + $scope.supplierModel.name +'</b> created successfully');	
					$timeout(function(){														
					$location.url("/supplierlist");
				}, 3000);						
		})
		.error(function(){
			console.log('Error while adding the Supplier');
			toastr.error('<b>Seems there is an issue </b>');
		});		
	};

});