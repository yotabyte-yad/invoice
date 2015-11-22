var app = angular.module("ybinvoice",['ngRoute', 'ngAnimate', 'ngSanitize', 'mgcrea.ngStrap']);

app.config(function($routeProvider) {
  $routeProvider
	.when('/home', {
		templateUrl: 'views/home.html'
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
  	.otherwise({
		redirectTo: '/home'
  })
})

.config(function($datepickerProvider) {
  angular.extend($datepickerProvider.defaults, {
    dateFormat: 'dd/MM/yyyy',
    startWeek: 1,
	autoclose: true
  });
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

