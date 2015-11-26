'use strict';

myApp.controller('titleController',function($scope,$rootScope){
 $scope.title = " AngularJS Learning Application V1.0";
 $rootScope.$log.debug($scope.title);
});

myApp.controller('loginCntrl',['$scope','$rootScope','userService',function($scope,$rootScope,userService){
 $rootScope.$log.debug("loginCntrl invoked");
 
 $scope.login = function(){
  $rootScope.$log.debug("login function invoked");
  userService.validateUser($scope,$rootScope);  
 };
}]);