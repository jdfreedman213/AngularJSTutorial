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
    .when('/forecast/:days', {
        templateUrl: 'pages/forecast.html',
        controller: 'forecastController'
    });

});

weatherApp.service('forecastService', function() {
//    var self = this;
    this.city = 'Yardley, PA';  
});
 

weatherApp.controller('homeController', ['$scope', '$log', 'forecastService', function($scope, $log, forecastService) {
    $scope.city = forecastService.city;
    $scope.$watch('city', function() {
        forecastService.city = $scope.city;
    });

}]);

weatherApp.controller('forecastController', ['$scope', '$log', '$resource', '$routeParams', 'forecastService', function($scope, $log, $resource, $routeParams, forecastService) { 
    $scope.city = forecastService.city;
    $scope.days = $routeParams.days || 2;
    console.log($scope.days);
    $scope.weatherAPI = $resource(apiUrl, { callback: "JSON_CALLBACK" }, { get: { method: "JSONP" }})
    
    $scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city, cnt: $scope.days });
    
    $scope.convertToFahrenheit = function(degK) {
        return Math.round((1.8 * (degK - 273)) + 32);
    }
    
    $scope.convertToDate = function(dt) {
        return new Date(dt * 1000);
    }
}]);