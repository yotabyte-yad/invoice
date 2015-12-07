var app = angular.module("ybinvoice",[
					'ngRoute', 
					'ngSanitize', 
					'mgcrea.ngStrap',
					'angular-ladda',
					'ngAnimate'
					]);

app.config(function($routeProvider) {
  $routeProvider
	.when('/home', {
		// Sales page should be the default page
		templateUrl: 'views/sales/sales.html'
  })
  	.when('/login', {
		templateUrl: 'views/login/login.html',
		controller: 'LoginCtrl'
  })
   	.when('/logout', {
		templateUrl: 'views/logout/logout.html',
		controller: 'LogoutCtrl'		
  })
  	.when('/profile', {
		templateUrl: 'views/profile/profile.html',
		controller: 'ProfileCtrl',
		resolve: {
			//function to check if the person is logged in 
			logincheck: checkLogin
		}
  })
  	.when('/register', {
		templateUrl: 'views/register/register.html',
		controller: 'RegisterCtrl'
  })
    .when('/purchase', {
		templateUrl: 'views/purchase/purchase.html',
		controller: 'PurchaseCtrl'
  })
  	.when('/supplier', {
		templateUrl: 'views/supplier/supplier.html',
		controller: 'SupplierCtrl'
  })
// BEGIN SECTION --> End point for Manufacturers screens  	
  	.when('/mfgs', {
		templateUrl: 'views/mfgs/mfgs.html',
		controller: 'MfgsCtrl'
  })
  	.when('/mfgslist', {
		templateUrl: 'views/mfgs/mfgslist.html',
		controller: 'MfgsListCtrl'
  })
    .when('/editmfgs/:id', {
		templateUrl: 'views/mfgs/mfgsedit.html',
		controller: 'mfgsEditCtrl'
  })	
// END SECTION --> End point for Manufacturers screens 

// BEGIN SECTION --> End point for Sales screens     	
    .when('/sales', {
		templateUrl: 'views/sales/sales.html',
		controller: 'SalesCtrl'
  })  
     .when('/search', {
		templateUrl: 'views/search/search.html',
		controller: 'searchCtrl'
  })
    .when('/items', {
		templateUrl: 'views/items/items.html',
		controller: 'ItemsCtrl'
  })
  // 	.otherwise({
		// redirectTo: '/home'
  // })
})

.config(function($datepickerProvider) {
  angular.extend($datepickerProvider.defaults, {
    dateFormat: 'dd/MM/yyyy',
    startWeek: 1,
	autoclose: true
  });

  toastr.options = {
    "closeButton": true,
    "timeOut": "1000",
    "showMethod": "fadeIn"
};

});

var checkLogin = function ($q, $timeout, $http, $location, $rootScope) {
	var deferred = $q.defer();

	$http.get('/login').success(function(user){
		$rootScope.errorMessage = null;
		//User is already authenticated
		if(user != 0){
			$rootScope.currentUser = user;
			deferred.resolve();
		}
		else {
			$rootScope.currentUser = undefined;
			$rootScope.errorMessage = 'You need to Log in';
			deferred.reject();
			$location.url('/login');
		}	
	});
	return deferred.promise;	
}

app.controller("NavCtrl", function($rootScope, $scope, $http, $location){
	$scope.logout = function(){
		$http.post("/logout")
			.success(function (){
				$rootScope.currentUser = null;
				$location.url("/home");
			});
	}
});


///Starting looking Service or Factory as an alternative

app.service('ManufacturerService', function(){
	this.getAll = function (){
		///
		$http.get('http://localhost:5000/mfgs')
	    .success(function (data, status, headers, config) {
	        $scope.allMfgs = data;
	    })
	    .error(function (data, status, header, config) {
	        $scope.ResponseDetails = "Data: " + data +
	            "<br />status: " + status +
	            "<br />headers: " + jsonFilter(header) +
	            "<br />config: " + jsonFilter(config);
	    });
	    console.log('ManufacturerService', $scope.allMfgs);	
		///
		$scope.createMfgs = function(mfgsmodel) {
				$http.post('/mfgs', mfgsModel).success(function(response){
					console.log('ManufacturerService', response.mfgs);
				})
			};

		///
	}
});
