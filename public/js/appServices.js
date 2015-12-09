app.factory('Manufacturers', ['$http', function($http){
	var urlBase = 'http://localhost:5000/mfgs';
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

app.factory('Suppliers',['$http', function($http){
	// variable stores one supplier record, useful during editing
	var supplier = {};
  var urlBase = 'http://localhost:5000/suppliers';

  getAll = function(){
		return $http.get(urlBase);
	};

	create = function(supplierModel) {
		console.log('appServicesCreate', supplierModel);
		return $http.post(urlBase, supplierModel);
	};	

	return {
	 	supplier: supplier,
	 	getAll: getAll,
	 	create: create
	};


}]);
