app.controller("mfgsUpdateCtrl", function ($location, $scope, $http, Manufacturers, $routeParams){
	
	//console.log($routeParams);

	(function(){
		$scope.mfgsModel = Manufacturers.manufacturer;
		if ($scope.mfgsModel.name === undefined){
				$location.url("/mfgslist");
		}
	}());

	//console.log('mfgsEditCtrl', $scope.mfgsModel);

	$scope.UpdateManufacturer = function(){
		Manufacturers.update($scope.mfgsModel)
		.success(function(response){
			toastr.success('Manufacturer <b>' + $scope.mfgsModel.name +'</b> updated successfully');				
		})
		.error(function(){
				console.log('Error while updating Manufacturers');
		});
	  // /toastr.success('Manufacturer updated successfully');
	};

});	