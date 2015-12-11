var server = 'http://localhost:5000';

app.factory('Manufacturers', ['$http', function($http){
	var urlBase = server + '/mfgs';
	//var Manufacturers = {};

	var manufacturer = {};

	getAll = function(){
		return $http.get(urlBase);
	};

	create = function(mfgsModel) {
		//console.log('appServicesCreate', mfgsModel);
		return $http.post(urlBase, mfgsModel);
	};	

	update = function(mfgsModel){
		//console.log('appServicesUpdate', mfgsModel);
		//return mfgsModel;
		return $http.put(urlBase + '/' + mfgsModel.id, mfgsModel);
	}

	 return {
	 	manufacturer: manufacturer,
	 	getAll: getAll,
	 	create: create,
	 	update: update
	 };

}]);

// Supplier Factory
app.factory('Suppliers',['$http', function($http){
	// variable stores one supplier record, useful during editing
	var supplier = {};
  var urlBase = server + '/suppliers';

  getAll = function(){
		return $http.get(urlBase);
	};

	create = function(supplierModel) {
		console.log('appServicesCreate', supplierModel);
		return $http.post(urlBase, supplierModel);
	};

	update = function(supplierModel){
		//console.log('appServicesUpdate', supplierModel);
		return $http.put(urlBase + '/' + supplierModel.id, supplierModel);
	}
	

	return {
	 	supplier: supplier,
	 	getAll: getAll,
	 	create: create,
	 	update: update
	};


}]);

//Factory for Suppliers
app.factory('SalesFactory',['$http', function($http){
	// variable stores one supplier record, useful during editing
	var sales = {};
  var urlBase = server + '/sales';

  getAll = function(){
		return $http.get(urlBase);
	};

	create = function(salesModel) {
		console.log('appServicesCreate', salesModel);
		return $http.post(urlBase, salesModel);
	};

	update = function(salesModel){
		//console.log('appServicesUpdate', supplierModel);
		return $http.put(urlBase + '/' + salesModel.id, salesModel);
	}
	

	return {
	 	sales: sales,
	 	getAll: getAll,
	 	create: create,
	 	update: update
	};


}]);