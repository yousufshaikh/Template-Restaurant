'use strict';
cartApp.controller('menuController',function($rootScope,$scope,SLStorage,$http){
    $scope.counter = 0;

    // fetching dishes from json file
    $http.get('data/1.json').success(function(data){
        $scope.dishes = data;
    });

   $scope.images = [1, 2, 3, 4, 5, 6, 7, 8];

  $scope.loadMore = function() {
    var last = $scope.images[$scope.images.length - 1];
    for(var i = 1; i <= 8; i++) {
      $scope.images.push(last + i);
    }
  };


    // $scope.dishes = [
    // {
    //  name:"Prawn",
    //  price:400,
    //  img:"dish-2.png"
    // },
    // {
    //  name:"Grilled Salmon",
    //  price:500,
    //  img:"dish-3.png"
    // },
    // {
    //  name:"Sweet &amp; spicy chicken",
    //  price:200,
    //  img:"food-11.jpg"
    // },
    // {
    //  name:"Chicken Schnitzel",
    //  price:350,
    //  img:"dish-4.png"
    // },
    // ];

    console.log($rootScope.orderCount);
    
    // $scope.items = (SLStorage.get('cart').length > 0) ? SLStorage.get('cart') : [];
    $scope.items = [];
    console.log($scope.items);
    console.log(SLStorage.get('cart'));
     // Add a Item to the list
    $scope.count = function (index) {
        var dish = $scope.dishes[index];
         $scope.items.push(dish);
         console.log(dish);
        /*$scope.items.push({
            name:dish.name,
            price:dish.price
        });*/
           SLStorage.put('cart',$scope.items);
            $rootScope.orderCount = $scope.items.length;
    };
}); 