app.controller("MfgsCtrl", function ($location, $scope, Manufacturers, $timeout){
	//TODO
	$scope.mfgsModel = {};
	$scope.allMfgs = {};
	$scope.order = 'name';
		
	$scope.createMfgs = function(){

		Manufacturers.create($scope.mfgsModel)
		.success(function(response){
					$timeout(function(){															
					$location.url("/mfgslist");
				}, 3000);	
		toastr.success('Manufacturer <b>' + $scope.mfgsModel.name +'</b> created successfully');				
		})
		.error(function(){
			console.log('Error while adding this Manufacturer');
		});

	};
													
});	
	