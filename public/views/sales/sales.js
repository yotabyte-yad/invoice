
app.controller("SalesCtrl", function ($scope, $templateCache, $http){
	console.log('In sales controller');
	
	$scope.billModel = {};

	//Bill header
	$scope.billModel.billno = 0;
	$scope.billModel.date;
	$scope.billModel.patient;
	$scope.billModel.doctor;

	$scope.billModel.items = [];

	//Bill details
	//$scope.billModel.details = [new $scope.billModel.detail_row()];
	//Bill detail object for each row, there should be one object per row of items on the bill
	// $scope.billModel.detail_row = function (){
	// 							   this.row_id = undefined,
	// 							   this.bill_no = undefined,
	// 							   this.item_id = undefined
	// 							   // item_name: undefined,
	// 							   // item_qty: undefined,
	// 							   // item_sch: undefined,
	// 							   // item_mfg: undefined,
	// 							   // item_btch: undefined,
	// 							   // item_exp:undefined,
	// 							   // item_amt: undefined
	// 							   };


	//Trying out 	

	//Taxes
	$scope.billModel.vat5 = 0;
	$scope.billModel.vat7 = 0;

	//Bill discount
	$scope.billModel.discount = 0;

	//Bill amount
	$scope.billModel.grossAmount = 0;
	$scope.billModel.netAmount = 0;

	$scope.getAddress = function() {		
		//var params = {address: viewValue, sensor: false};
		//console.log('Printing params', params);
		//return $http.get('http://maps.googleapis.com/maps/api/geocode/json', {params: params})
		return $http.get('http://localhost:5000/items')
		.then(function(res) {
		
		var json = res.data;

		var parsed = json;

		var arr = [];

		for(var x in parsed){
		arr.push(parsed[x].item_name);
		//console.log(parsed[x].item_name);
		
		}	
		$scope.states = arr;
		console.log($scope.states);	
		//console.log('Results', res.data);	
		return $scope.states;
		});
	};
	$scope.getAddress();
});	


// $scope.selectedState = "";
// $scope.states = ["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Dakota","North Carolina","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"];

// $scope.selectedIcon = "";
// $scope.icons = "[{"value":"Gear","label":"<i class=\"fa fa-gear\"></i> Gear"},{"value":"Globe","label":"<i class=\"fa fa-globe\"></i> Globe"},{"value":"Heart","label":"<i class=\"fa fa-heart\"></i> Heart"},{"value":"Camera","label":"<i class=\"fa fa-camera\"></i> Camera"}]";

// $scope.selectedAddress = "";