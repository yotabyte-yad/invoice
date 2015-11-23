//Test 
app.controller("ItemsCtrl", function ($location, $scope, $http, $rootScope){
	//console.log("clicked ItemsCtrl");
	$scope.itemModel = {};
	// $scope.item.item_name = 'Change';
	// $scope.item.item_mfg = 'Comp Change';
	// $scope.item.item_sch = 'N';
	// $scope.item.item_tax_per = 0;
	// $scope.item.item_reorder_level = 0;
	// $scope.item.item_reorder_qty = 0;
	// $scope.item.item_description = 'Enter comments';
	
	$scope.createItem = function(item){
		console.log("within ItemsCtrl Items");	
		console.log($scope.item);
		$http.post('/item', $scope.item).success(function(response){
			console.log('Server Response: ' );
			console.log(response);
			//$scope.serverResponse = response;
				
	});
   };	
});