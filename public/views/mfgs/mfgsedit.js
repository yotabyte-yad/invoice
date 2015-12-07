app.controller("mfgsEditCtrl", function ($location, $scope, $http, Manufacturers, $routeParams){
	
	console.log($routeParams);

	(function(){
		$scope.mfgsModel = Manufacturers.manufacturer;
	}());

		console.log('mfgsEditCtrl', $scope.mfgsModel);
	 // $scope.updateManufacturer = function (id) {
	 // 		var manufacturer;
	 // 		for (var i = 0; i < $scope.allMfgs.length; i++) {
  //       var currManu = $scope.allMfgs[i];
  //       if (currManu.id === id) {
  //           cust = currCust;
  //           break;
  //       }
  //   	}	
  //  }
   

});	