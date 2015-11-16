//Test 
app.controller("ItemsCtrl", function ($location, $scope, $http, $rootScope){
	console.log("clicked ItemsCtrl");
	
	$scope.createItem = function(){
		console.log("within ItemsCtrl Items");	
		console.log($scope.item);
		$http.post('/createItem', $scope.item).success(function(response){
			console.log(response);
			$scope.serverResponse = response;
				
	});
   };	
});