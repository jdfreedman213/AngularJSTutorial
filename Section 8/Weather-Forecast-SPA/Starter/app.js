// MODULE
var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

var apiKey = 'b678005ffbc244b26450a289349b8902';
var apiUrl = 'http://api.openweathermap.org/data/2.5/forecast/daily?APPID=' + apiKey;

weatherApp.config(function ($routeProvider) {
    
    $routeProvider
    .when('/', {
        templateUrl: 'pages/home.html',
        controller: 'homeController'
    }) 
    .when('/forecast', {
        templateUrl: 'pages/forecast.html',
        controller: 'forecastController'
    })
});

weatherApp.service('forecastService', function() {
//    var self = this;
    this.city = '';  
});
 

weatherApp.controller('homeController', ['$scope', '$log', 'forecastService', function($scope, $log, forecastService) {
    $scope.city = forecastService.city;
    $scope.$watch('city', function() {
        forecastService.city = $scope.city;
    });

}]);

weatherApp.controller('forecastController', ['$scope', '$log', 'forecastService', function($scope, $log, forecastService) { 
    $scope.city = forecastService.city;
}]);