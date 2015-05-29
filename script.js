/**
  * Copyright reelyActive 2014-2015
  * We believe in an open Internet of Things
  */

  
var mymodule = angular.module("watch", []);

mymodule.controller("ctrl", function($scope) {
    $scope.person_ld = {
            "@context": {
            "schema": "http://schema.org/"
			},
           "@graph": [{
            "@id": "person",
			"@type": "schema:Person",
			}
			]
	
    }

	 

    $scope.person = {};
   
	  function changeKeyValue() {

        for (var key in $scope.person) {
            if ($scope.person.hasOwnProperty(key)) {
                if(!$scope.person[key].length){
                   delete $scope.person_ld["@graph"][0]["schema:" + key];
                } else {
                   $scope.person_ld["@graph"][0]["schema:" + key] = $scope.person[key];
                }
            }
        }
    }

	
    $scope.change = function () {
        changeKeyValue();
    }
})


mymodule.controller("main",function($scope) {
    $scope.jsonerator = true;
    $scope.jsonerator2 = true;
	$scope.jsonerator3 = true;
	
	
    $scope.person = function() {
        $scope.jsonerator = true;
        $scope.jsonerator2 = false;
		$scope.jsonerator3 = false;
		 }
	
	
	 $scope.product = function() {
        $scope.jsonerator = false;
        $scope.jsonerator2 = true;
		$scope.jsonerator3 = false;
		}
	
	
	 $scope.place = function() {
        $scope.jsonerator = false;
        $scope.jsonerator2 = false;
		$scope.jsonerator3 = true;
		   }
	
	
})


mymodule.controller("ctrl2", function($scope) {
    $scope.product_ld = {
  "@context": {
    "schema": "http://schema.org/"
  },
  "@graph": [
    {
      "@id": "product",
      "@type": "schema:Product",
      "schema:manufacturer": {
        "@type": "schema.Organization"
             }
           }
           ]
}
  

    $scope.product = {};
   
	  function changeKeyValue() {

        for (var key in $scope.product) {
            if ($scope.product.hasOwnProperty(key)) {
                if(!$scope.product[key].length){
                
                  
     				delete $scope.product_ld["@graph"][0]["schema:" + key];
				    delete $scope.product_ld["@graph"][0]['schema:manufacturer'][key];
				
				
                } 
				else if ($scope.product[key]== $scope.product.name){
				$scope.product_ld["@graph"][0]['schema:manufacturer'][key] = $scope.product[key];}
				
				else if ($scope.product[key]== $scope.product.model ){
				$scope.product_ld["@graph"][0][ "schema:" + key] = $scope.product[key]; }
				
				
                else if ($scope.product[key]== $scope.product.logo ){
				$scope.product_ld["@graph"][0][ "schema:" + key] = $scope.product[key]; }
				
				
				 else if ($scope.product[key]== $scope.product.url ){
				$scope.product_ld["@graph"][0][ "schema:" + key] = $scope.product[key]; }
				
				
				 else if ($scope.product[key]== $scope.product.image ){
				$scope.product_ld["@graph"][0][ "schema:" + key] = $scope.product[key]; }
				
				

			}
               }
        }
    

	
    $scope.change = function () {
        changeKeyValue();
    }
})


mymodule.controller("ctrl3", function($scope) {
    $scope.place_ld = {
      "@context": {
         "schema": "http://schema.org/"
      },
      "@graph": [
        {
          "@id": "place",
          "@type": "schema:Place",
           "schema:address": {
            "@type": "schema.PostalAddress"
           }
        }
      ]
    }
	
	
    $scope.place = {};
   
	  function changeKeyValue() {

        for (var key in $scope.place) {
            if ($scope.place.hasOwnProperty(key)) {
                
				
				if(!$scope.place[key].length){
					
                   
				   delete $scope.place_ld["@graph"][0]["schema:" + key];
				   delete $scope.place_ld["@graph"] [0]['schema:address'][key];
				   
				  
				   } 
				
				else if ($scope.place[key]== $scope.place.name){
				$scope.place_ld["@graph"][0]["schema:" + key] = $scope.place[key];}
				
				else if ($scope.place[key]== $scope.place.streetaddress){
				$scope.place_ld["@graph"][0]['schema:address'][key] = $scope.place[key];}
				
				else if ($scope.place[key]== $scope.place.addresslocality){
				$scope.place_ld["@graph"][0]['schema:address'][key] = $scope.place[key];}
				
				else if ($scope.place[key]== $scope.place.addressRegion){
				$scope.place_ld["@graph"][0]['schema:address'][key] = $scope.place[key];}
				
				else if ($scope.place[key]== $scope.place.postalCode){
				$scope.place_ld["@graph"][0]['schema:address'][key] = $scope.place[key];}
				
				else if ($scope.place[key] == $scope.place.addressCountry){
				$scope.place_ld["@graph"][0]['schema:address'][key] = $scope.place[key];}
				
				else if ($scope.place[key]== $scope.place.logo){
				$scope.place_ld["@graph"][0]["schema:" + key] = $scope.place[key];}
				
				else if ($scope.place[key]== $scope.place.url){
				$scope.place_ld["@graph"][0]["schema:" + key] = $scope.place[key];}
				
				else if ($scope.place[key]== $scope.place.image){
				$scope.place_ld["@graph"][0][ "schema:" + key] = $scope.place[key];}
				

            }
        }
    }

	
    $scope.change = function () {
        changeKeyValue();
    }
});
	


