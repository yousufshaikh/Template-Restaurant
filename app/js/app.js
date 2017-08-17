'use strict';

var cartApp = angular.module('cartApp', ['ngResource','SLStorage','infinite-scroll'])
	.config(function($routeProvider/*,$locationProvider*/){
		
		//route without tempalteUrl
		$routeProvider.when('/',
		{
			templateUrl:'partial/CRM.html',
			controller:'MainController'	
			
		});

		$routeProvider.when('/AboutPage',
		{
			template:'This is an About Page',
		});

		


		//new Event router
		$routeProvider.when('/Mycart',
		{
			templateUrl:'partial/cart.html',
			controller:'cartController'
		});

		//Route for Profile Page
		$routeProvider.when('/menu',
		{
			templateUrl:'partial/modern-menu.html',
			controller:'menuController'
		});


		//Events List router
		

		// //EventDetails Page router
		// $routeProvider.when('/event/:eventId',
		// {
		// 	templateUrl:'templates/EventDetails.html',
		// 	controller:'EventController',
		// 	resolve:{
		// 		event:function($q,eventData,$route){
		// 			var deferred = $q.defer();
		// 			eventData.getEvent($route.current.pathParams.eventId)
		// 			.then(function(event){deferred.resolve(event);});
		// 			return deferred.promise;
		// 		}
		// 	}
		// });


		//Default Route for wrong url address
		$routeProvider.otherwise(
			{
				redirectTo:'/'
			});

		//For Removing # sign from url
		//$locationProvider.html5Mode(true);
	});
	

