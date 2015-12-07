app.controller("mfgsEditCtrl", function ($location, $scope, $http, Manufacturers, $routeParams){
	
	//console.log($routeParams);

	(function(){
		$scope.mfgsModel = Manufacturers.manufacturer;
	}());

	//console.log('mfgsEditCtrl', $scope.mfgsModel);

	$scope.UpdateManufacturer = function(){
		Manufacturers.update($scope.mfgsModel)
		.success(function(response){
			toastr.success('Manufacturer updated successfully');
			//toastr.success('Manufacturer <b>' + $scope.mfgsModel.name +'</b> updated successfully');				
		})
		.error(function(){
				console.log('Error while updating Manufacturers');
		});
	};

});	