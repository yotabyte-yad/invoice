//Test 
app.controller("PurchaseCtrl", function ($location, $scope, $http, $rootScope){
	$scope.items =[ { 
							"code": 1000,
							"name": "DOLO 650 MG",
							"retailprice": 5.25,
							"itemlocation" :"Shelf D",
							"tax" : 5.5,
							"batch" : "BTCH2015,",
							"expiry": "AUG-2016",
							"quantity": 500
							},
						{ 
							"code": 2000,
							"name": "HONITUS 250ML",
							"retailprice": 63.00,
							"itemlocation" :"Shelf D",
							"tax" : 5.5,
							"batch" : "BTCH2015,",
							"expiry": "AUG-2016",
							"quantity": 100
							},
						{ 
							"code": 3000,
							"name": "PARACETAMOL",
							"retailprice": 1.00,
							"itemlocation" :"Shelf D",
							"tax" : 0,
							"batch" : "BTCH2015,",
							"expiry": "AUG-2017",
							"quantity": 200
							},
						{ 
							"code": 4000,
							"name": "DOLO 650 MG",
							"retailprice": 5.25,
							"itemlocation" :"Shelf D",
							"tax" : 5.5,
							"batch" : "BTCH2015,",
							"expiry": "AUG-2016",
							"quantity": 500
							}           
						]  
	
	
	$scope.createPurchaseItem = function(){
		console.log("within PurchaseItem");
		//$scope.items = require('./testpurchase.json');	
		console.log($scope.items);
	// 	$http.post('/createItem', $scope.item).success(function(response){
	// 		console.log(response);
	// 		$scope.serverResponse = response;
				
	// });
   };
///////////////////////////////////////////////////////// 


   
   
/////////////////////////////////////////////////////////   	
});


//// JSON

