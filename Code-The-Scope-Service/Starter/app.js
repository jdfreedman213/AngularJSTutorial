/*global angular, console */
var myApp = angular.module('myApp', ['ngMessages', 'ngResource']);

myApp.controller('mainController', function ($scope, $log, $filter, $resource) {
    "use strict";
    
    console.log($resource);
});