app.controller("MfgsCtrl", function ($location, $scope, $http, $rootScope){
	//TODO
	$scope.mfgsModel = {};
	$scope.allMfgs = {};
	$scope.order = 'name';
	

		var refresh = function(){
				$http.get('http://localhost:5000/mfgs').success(function (response){
					console.log("Got the requested data");
					console.log(response);
					$scope.allMfgs = response;					
				});
			};
		//fetch all the mfgs on page load
		refresh();	
	
	$scope.createMfgs = function(){
		
	}



});	
	