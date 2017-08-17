'use strict';
cartApp.controller('modalcontroller',
	function modalcontroller($rootScope,$scope,$location){

		

		$scope.login = function(){
            $location.replace();
            $location.url('/login');

			// var head = "LogIn";
			// $scope.header = head;
			 console.log("Modal");
		}



	});