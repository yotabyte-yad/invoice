//Test 
app.controller("PurchaseCtrl", function ($location, $scope, $http, $rootScope){
	console.log("clicked PurchaseCtrl");
	
	$scope.createItem = function(){
		console.log("within Purchase Items");	
		console.log($scope.item);
		$http.post('/createPurchase', $scope.item).success(function(response){
			console.log(response);
			$scope.serverResponse = response;
				
	});
   };	
});