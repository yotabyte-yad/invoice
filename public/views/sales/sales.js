//Test 
app.controller("SalesCtrl", function ($scope, $http){

	 $scope.test_variable = 'Yadnyesh';
	 $scope.bill = '';
	 $scope.bill_header = '';
	 $scope.bill.item_row = '';
	 $scope.bill.item_list = [];

		$scope.addItemRow = function () {

			// the following should happen when the user clicks on addItemRow for the first time
			// 1) Create the record in sales if it does not exist AND RETRIEVE BILL NO
			// 2) Add the item to sales_details table and retrieve all the records related to the bill in sales table
			// 3) Display the records to the user

			$scope.item_list.push($scope.item_row.itemname);
			console.log('The entered row is: ' + $scope.item_row.itemname);
			console.log($scope.item_list[0]); 
		}			

	 $scope.data = [
					  ["", "Ford", "Volvo", "Toyota", "Honda"],
					  ["2014", 10, 11, 12, 13],
					  ["2015", 20, 11, 14, 13],
					  ["2016", 30, 15, 12, 13]
					];
					
	  $scope.selectedAddress = 'Manyata';
		$scope.getAddress = function(viewValue) {
			 	
			var params = {address: viewValue, sensor: false};
			console.log("paramas print", params);
			return $http.get('http://maps.googleapis.com/maps/api/geocode/json', {params: params})
			.then(function(res) {
				console.log(res);
			return res.data.results;
			});
  };					

});

