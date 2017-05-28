'use strict';

angular.module('backbaseApp', [
  'ngRoute',
  'backbaseApp.view1'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
