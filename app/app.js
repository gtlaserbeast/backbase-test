'use strict';

angular.module('backbaseApp', [
	'ngRoute',
	'backbaseApp.view1',
	'backbaseApp.service'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
	$locationProvider.hashPrefix('!');
	$routeProvider.otherwise({redirectTo: '/view1'});
}]);
