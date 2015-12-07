app.factory('Manufacturers', ['$http', function($http){
	var urlBase = 'http://localhost:5000/mfgs';
	//var Manufacturers = {};

	getAll = function(){
		return $http.get(urlBase);
	};

	create = function(mfgsModel) {
		console.log('appServices', mfgsModel);
		return $http.post(urlBase, mfgsModel);
	};	

	 return {
	 	getAll: getAll,
	 	create: create
	 };

}]);
