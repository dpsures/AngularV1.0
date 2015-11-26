'use strict';

myApp.factory('userService',['$resource',function($resource){
 return new User($resource);
}]);


function User(resource){
 this.resource = resource;
 
 this.validateUser = function(scope,rootScope){
  rootScope.$log.debug("validateUser invoked");
 };
}