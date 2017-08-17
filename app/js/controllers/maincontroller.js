'use strict';
cartApp.controller('MainController',
	function MainController($rootScope,$scope,$location,SLStorage,$http){


		$http.get('data/1.json').success(function(data){
			$scope.dishes = data;

		});
		
			/*console.log('absUrl: ',$location.absUrl());
			console.log('protocol: ',$location.protocol());
			console.log('port: ',$location.port());
			console.log('host: ',$location.host());
			console.log('path: ', $location.path());
			console.log('search: ',$location.search());
			console.log('hash: ',$location.hash());
			console.log('url: ',$location.url());*/
		$rootScope.orderCount  = SLStorage.get('cart').length;
		
		$rootScope.reserved = function(){
			var name = $scope.user;
			alert("Thank you " + name +" Your Table is reserved Successfully!");
			

		};

		$scope.Mycart = function(){
			$location.replace();
			$location.url('/Mycart');
		};

		$scope.menu = function(){
			$location.replace();
			$location.url('/menu');
		};
		
		$scope.send = function(){
			
		};

		
		//Modal Functions
		$scope.login = function(){
			$rootScope.header = "LogIn";
			 console.log("Modal");
		};

		$rootScope.signup = function(){
			$rootScope.header = "SignUp";
			var append = angular.element(document.querySelector('#append'));
			append.append(' <label id="append"><p align="left"><strong> Confirm Password:</strong></p><input type="password" class="form-control" size="40" placeholder="Re-Enter Password"></label>');
			console.log("SignUp");
		};

		


	});