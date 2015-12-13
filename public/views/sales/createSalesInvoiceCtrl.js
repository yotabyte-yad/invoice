app.controller("createSalesInvoiceCtrl", function ($scope, $templateCache, $http, SalesInvoiceFactory){

$scope.dummySalesInvoiceModel = {"items":[{"itemname":"dolo","quantity":"1","sch":false,"mfg":"","batch":"","expdate":"","price":100,"amount":""},{"itemname":"crocin","quantity":"2","sch":false,"mfg":"","batch":"","expdate":"","price":100,"amount":""},{"quantity":0,"sch":false,"mfg":"","batch":"","expdate":"","price":100,"amount":""}],"discount":"200"}


$scope.salesInvoiceModel = {};

	//Invoice header
	$scope.salesInvoiceModel.billno = 0;
	$scope.salesInvoiceModel.date;
	$scope.salesInvoiceModel.patient;
	$scope.salesInvoiceModel.doctor;

	$scope.salesInvoiceModel.items = [];

	//Taxes
	$scope.salesInvoiceModel.vat5 = 0;
	$scope.salesInvoiceModel.vat7 = 0;
	$scope.salesInvoiceModel.GST  = 0;

	//discount
	$scope.salesInvoiceModel.discount = 0;

	// amount
	$scope.salesInvoiceModel.grossAmount = 0;
	$scope.salesInvoiceModel.netAmount = 0;

	$scope.addItem = function(){
		
		//Add blank row only if there are less than 1 blank row remaining
		//no point in adding blank rows if 2 of them already exists
		var blank = 0;
		for(count=0;count < $scope.salesInvoiceModel.items.length;count++){
			if($scope.salesInvoiceModel.items[count].itemname === undefined) {
				blank += blank + 1
			}			
		}

		if(blank == 0){
			$scope.salesInvoiceModel.items.push({
	         itemname:undefined,
	         quantity:0,
	         sch: false,
	         mfg: '',
	         batch: '',
	         expdate: '',
	         price: 100,
	         amount: ''
	         });						
		}
		//console.log($scope.billModel.items);
	}


	$scope.removeItem = function(item){
		$scope.salesinvoiceModel.items.splice($scope.salesinvoiceModel.items.indexOf(item),1);
	}

	$scope.totalPrice = function(){
			var subtotal = 0;
			for(count=0;count<$scope.salesinvoiceModel.items.length;count++){
				subtotal += (($scope.salesinvoiceModel.items[count].price || 0) * ($scope.salesinvoiceModel.items[count].quantity || 0));
			}
			return subtotal;
	};

	$scope.grandTotal = function(){
			var grandtotal = 0;
			grandTotal = (($scope.totalPrice() || 0) - ($scope.salesinvoiceModel.discount || 0));
			return grandtotal;
	};
	$scope.salesinvoiceModel.netAmount = $scope.grandTotal() || 0;

	$scope.saveSalesInvoice = function(){
		SalesInvoiceFactory.create($scope.dummySalesInvoiceModel)
				.success(function(response){
					toastr.success('Sales Invoice created successfully');	
					$timeout(function(){														
					$location.url("/mfgslist");
				}, 3000);						
		})
		.error(function(){
			console.log('Error while adding this Bill');
			toastr.error('<b>Seems there is an issue </b>');
		});		

	} //end of function - saveSalesInvoice



}); //end controller