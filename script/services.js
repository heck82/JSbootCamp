angular.module('myApp')
 .factory('JobsService', function($http) {

 	return {
 		fetchList: function() {
 			return $http('../list.json');
 		}	
 	}	

 })