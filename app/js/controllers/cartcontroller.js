'use strict';
cartApp.controller('cartController',
function ($rootScope,$scope,SLStorage) {
    console.log(SLStorage.get('cart'));
    $scope.carts = SLStorage.get('cart');

        
        $scope.Cart = {products:[],subTotal:0,total:0,discount:0,tax:0,netAmount:0,totalItems:0,totalQty:0};
        $scope.Cart.products = $scope.carts;
        var calcCheckout = function(Cart){
		var subTotal=0,
			total=0,
			items=0,
			unit=0,
			discount=0,
			tax=Cart.tax,
			products = $scope.items;
			products.forEach(function(prod){
				unit = prod.unit;
				discount += parseInt(prod.disc)*unit;
				subTotal+=prod.price*unit;
				// totalTP +=prod.tp*unit;
				items+=unit;
			});
		var tx = (subTotal*tax)/100;
		var obj = {
			subTotal:subTotal,
			total:subTotal,
			netAmount: (subTotal+tx)-discount,
			totalItems:$scope.items.length,
			totalQty:items,
			//totalTP:totalTP,
			discount:discount
		};
		$.extend($scope.Cart,obj);
	};

    // 	var getAllProducts = function(){
	// 	POSService.getAllProducts().then(function(res){
	// 		if(res){
	// 		SLStorage.put('products',res);
	// 		$scope.AllProducts = res;
	// 		}
	// 	});
  	// };
  	// getAllProducts();
	// if(typeof(SLStorage.get('Cart').products)=='object'){
	// 	if(SLStorage.get('Cart').products.length!=0 ){

	// 		$scope.Cart = SLStorage.get('Cart');
	// 	}
	// }
	// calcCheckout($scope.Cart);
	// if(typeof(SLStorage.get('products'))=='object'){
	// 	if(SLStorage.get('products').length!=0 ){
	// 		$scope.AllProducts = SLStorage.get('products');
	// 		//console.log(SLStorage.get('products'));
	// 		//cumuteProduct();
	// 	}else{
	// 		getAllProducts();
	// 		//cumuteProduct();
	// 	}
	// }else{
	// 	getAllProducts();
	// 	//cumuteProduct();
	// }
	
	// $scope.addToCart = function(index,product){
	// 	product = product || $scope.AllProducts[index];
	// 	//console.log($scope.AllProducts[0]);
	// 	//console.log(product);
	// 	var check = $scope.Cart.products.some(function(pr){
	// 			return pr.barcode === product.barcode;
	// 			});
	// 		if(!check){
	// 			product.unit=1;
	// 			$scope.Cart.products.push(product);
	// 		}else{
	// 		var indexOfCart = $scope.Cart.products.findIndex(function(pro){ return pro.barcode == product.barcode; });
	// 			$scope.plusQty(indexOfCart);
	// 		}
	// 		calcCheckout($scope.Cart);
	// 		SLStorage.put('Cart',$scope.Cart);		
	// }
	$scope.removeFromCart = function(index){
         $scope.items.splice(index,1);
		// $scope.Cart.products.splice(index, 1);
		 calcCheckout($scope.Cart);
		// SLStorage.put('Cart',$scope.Cart);
		// //console.log($scope.Cart);
	}
	// $scope.discountNtax = function(){
	// 	calcCheckout($scope.Cart);
	// }
	// $scope.plusQty = function(index){
	// 	//console.log(index);

	// 	$scope.Cart.products[index].unit+=1;
	// 		calcCheckout($scope.Cart);
	// 		SLStorage.put('Cart',$scope.Cart);
	// }
	// $scope.minusQty = function(index){
	// 	if($scope.Cart.products[index].unit>1){
	// 		$scope.Cart.products[index].unit-=1;
	// 	}
	// 		calcCheckout($scope.Cart);
	// 		SLStorage.put('Cart',$scope.Cart);
	// }
	$scope.cancelCart = function(){
		$scope.Cart = {products:[],subTotal:0,total:0,discount:0,tax:0,netAmount:0,totalItems:0,totalQty:0};
		//SLStorage.put('Cart',$scope.Cart);
	}
    // $scope.dishes = [
    // {
    //  name:"Prawn",
    //  price:300,
    //  img:"food_7_thumb.png"
    // },
    // {
    //  name:"Grilled Salmon",
    //  price:300,
    //  img:"food_7_thumb.png"
    // },
    // {
    //  name:"Sweet &amp; spicy chicken",
    //  price:300,
    //  img:"food_7_thumb.png"
    // }
    // ];
    $scope.sendOrder = function(){
        alert("Send Successfully!");
        
    };

        
    // Item List Arrays
    $scope.items = [];
    console.log($rootScope.orderCount);
    // Add a Item to the list
    $scope.addItem = function (elem) {
        console.log(elem.product);
        var product = elem.product;
        var dish = elem.dish;
        if(dish.qty===undefined){dish.qty=1;}
        $scope.items.push({
            name:product.name,
            price:product.price,
            unit:dish.qty,
            disc:product.disc
        });

		console.log(calcCheckout($scope.Cart));
		console.log($scope.items);
    // $scope.abc = dish.price * dish.qty;
    //     console.log($scope.abc);
        // Clear input fields after push
        // $scope.Name = "";
        // $scope.email = "";
       // console.log($scope.Cart.products.name);

    };

    //delete Item
    $scope.delete = function(index){
       $scope.items.splice(index,1);
    };

    //  // Get Total Items
    // $scope.getTotalItems = function () {
    //     return $scope.items.length;
    // };
});
