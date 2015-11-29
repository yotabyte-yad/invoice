
app.controller("SalesCtrl", function ($scope, $templateCache, $http){
	console.log('In sales controller');
	
	$scope.billModel = {};

	//Bill header
	$scope.billModel.billno = 0;
	$scope.billModel.date;
	$scope.billModel.patient;
	$scope.billModel.doctor;

	$scope.billModel.items = [];

	//Taxes
	$scope.billModel.vat5 = 0;
	$scope.billModel.vat7 = 0;

	//Bill discount
	$scope.billModel.discount = 0;

	//Bill amount
	$scope.billModel.grossAmount = 0;
	$scope.billModel.netAmount = 0;


	$scope.addItem = function(){
		$scope.billModel.items.unshift({
         itemname:'',
         quantity:0,
         sch: false,
         mfg: '',
         batch: '',
         expdate: '',
         price: '',
         amount: ''
         });
	}

	$scope.removeItem = function(item){
		$scope.billModel.items.splice($scope.billModel.items.indexOf(item),1);
	}
});	
