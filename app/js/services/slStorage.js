 angular.module('SLStorage',[]).factory('SLStorage', [ function(){
        var service = {};
		var store = {};
		var prefix = 'pos-';
		var hiddenStorage = true;
		

		// This function is used for retriving data from localStorage at loading page
		for (var key in localStorage) {
				if(key.indexOf(prefix)!==-1){
					store[key] = JSON.parse(localStorage.getItem(key));
					if(hiddenStorage===true)
					localStorage.removeItem(key)
					;
				}
		}
		// For reload page
		window.onbeforeunload = function(event){
				
			for (var key in store) {
				localStorage[key] = JSON.stringify(store[key]);
			}	
		};

			
        service.put = function (key,value) { 

			store[prefix+key] = {key:value};
	
 
        };
		
		service.get = function (key) { 
			try{
				return store[prefix+key].key;
			}catch(e){
				return 'undefined';
			}
					
        };
		
		 service.remove = function (key) { 
		 	
       delete store[prefix+key];
 
        }; 
        service.reset = function () { 
		 	
        store = {};
 
        }; 

  return service;
}])
 /* .provider('SLStorage', function SLStorageProvider() {

  return{
    setHiddenStorage: function(value) {
       this.hiddenStorage = !!value;
		return true;
    },
	getHiddenStorage:function(){
		return this.hiddenStorage;
	},    
    $get:function(){
        return{
            setHiddenStorage: this.setHiddenStorage,
			getHiddenStorage:this.getHiddenStorage
        }
    }
    
  }
});  */
/* .provider("slStorageConfig", [function slStorageConfigProvider() {
   

    this.setHiddenStorage = function (value) {
        this.hiddenStorage = !!value;
    };
	this.getHiddenStorage = function () {
        return this.hiddenStorage;
		//console.log(this.hiddenStorage)
    };
	this.setPrefix = function (value) {
        this.prefix = ""+value;
		//console.log(this.hiddenStorage)
    };
	this.getPrefix = function () {
        return this.prefix;
		//console.log(this.hiddenStorage)
    };
console.log(this);
    this.$get = [function () {
        return {
			setHiddenStorage:this.setHiddenStorage,
			getHiddenStorage:this.getHiddenStorage,
			setPrefix:this.setPrefix,
			getPrefix:this.getPrefix
		}
    }];
}]); */
 











