/*global angular */
var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', function ($scope, $filter) {
    "use strict";

    $scope.handle = '';
    $scope.toLower = function (str) {
        return $filter('lowercase')(str);
    };
}]);
