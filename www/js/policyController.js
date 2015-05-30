angular.module('listPolicies.controllers', ['ionic'])
	/*.factory("policiesProvider", function ($resource) {
	  return $resource('data.json', {}, 
	    { 
	      get: { method: "GET", isArray: true },

	    })
	}).factory("infoService", function (policiesProvide) {
		  //llamo al factory para que consuma el json
		  var infoConsumida = infoProvider.get(); 
		  return {
		    info : infoConsumida,
		  };
})*/

.controller('policieController',function ($scope, $http){

	$http.get('resources/data.json').success(function (data){
		$scope.policies = data;	
	});
});

