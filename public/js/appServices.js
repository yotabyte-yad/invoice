app.factory('Manufacturers', ['$http', function($http){
	var urlBase = 'http://localhost:5000/mfgs';
	//var Manufacturers = {};

	getAll = function(){
		return $http.get(urlBase);
	};

	 return {
	 	getAll: getAll
	 };

}]);
