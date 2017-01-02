'use strict';

// Declare app level module which depends on views, and components
var semillero = angular.module('semillero', [
  'ngRoute'
]);

semillero.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {

  var basePath = "https://semillero-nahual.herokuapp.com/";

  $locationProvider.hashPrefix('!');


  /* app */
  $routeProvider.when('/graduated', {templateUrl: 'views/graduated/index.html', controller: 'graduatedController'});

  $routeProvider.otherwise({redirectTo: '/'});
}]).run(
    function ($rootScope, $location) {
      $rootScope.location = $location;
    });



