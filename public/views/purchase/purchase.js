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

			$rootScope.searchItems = [
				"ActionScript",
				"AppleScript",
				"Asp",
				"BASIC",
				"C",
				"C++",
				"Clojure",
				"COBOL",
				"ColdFusion",
				"Erlang",
				"Fortran",
				"Groovy",
				"Haskell",
				"Java",
				"JavaScript",
				"Lisp",
				"Perl",
				"PHP",
				"Python",
				"Ruby",
				"Scala",
				"Scheme"
			];
			
			//Sort Array
			$rootScope.searchItems.sort();
			//Define Suggestions List
			$rootScope.suggestions = [];
			//Define Selected Suggestion Item
			$rootScope.selectedIndex = -1;
			
			//Function To Call On ng-change
			$rootScope.search = function(){
				$rootScope.suggestions = [];
				var myMaxSuggestionListLength = 0;
				for(var i=0; i<$rootScope.searchItems.length; i++){
					var searchItemsSmallLetters = angular.lowercase($rootScope.searchItems[i]);
					var searchTextSmallLetters = angular.lowercase($scope.searchText);
					if( searchItemsSmallLetters.indexOf(searchTextSmallLetters) !== -1){
						$rootScope.suggestions.push(searchItemsSmallLetters);
						myMaxSuggestionListLength += 1;
						if(myMaxSuggestionListLength == 5){
							break;
						}
					}
				}
			}
			
			//Keep Track Of Search Text Value During The Selection From The Suggestions List  
			$rootScope.$watch('selectedIndex',function(val){
				if(val !== -1) {
					$scope.searchText = $rootScope.suggestions[$rootScope.selectedIndex];
				}
			});
			
			
			//Text Field Events
			//Function To Call on ng-keydown
			$rootScope.checkKeyDown = function(event){
				if(event.keyCode === 40){//down key, increment selectedIndex
					event.preventDefault();
					if($rootScope.selectedIndex+1 !== $rootScope.suggestions.length){
						$rootScope.selectedIndex++;
					}
				}else if(event.keyCode === 38){ //up key, decrement selectedIndex
					event.preventDefault();
					if($rootScope.selectedIndex-1 !== -1){
						$rootScope.selectedIndex--;
					}
				}else if(event.keyCode === 13){ //enter key, empty suggestions array
					event.preventDefault();
					$rootScope.suggestions = [];
				}
			}
			//Function To Call on ng-keyup
			$rootScope.checkKeyUp = function(event){ 
				if(event.keyCode !== 8 || event.keyCode !== 46){//delete or backspace
					if($scope.searchText == ""){
						$rootScope.suggestions = [];
					}
				}
			}
			//======================================
			
			//List Item Events
			//Function To Call on ng-click
			$rootScope.AssignValueAndHide = function(index){
				$scope.searchText = $rootScope.suggestions[index];
				$rootScope.suggestions=[];
			}
			//======================================
   
   
/////////////////////////////////////////////////////////   	
});



//// JSON

