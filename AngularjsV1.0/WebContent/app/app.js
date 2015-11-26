'use strict';

var myApp = angular.module('myApp', [ 'ui.router', 'ngResource' ]);

myApp.config(function($stateProvider, $logProvider) {

	$stateProvider.state('login', {
		url : "/login",
		templateUrl : "partial/login.html",
		controller : "loginCntrl",
		data : {
			publicAccess : true
		}
	});

	$logProvider.debugEnabled(true);
});

myApp.run(function($rootScope, $state, $log) {
	$rootScope.$log = $log;
	$rootScope.$log.debug("Application Started");
	$state.transitionTo('login');
});
