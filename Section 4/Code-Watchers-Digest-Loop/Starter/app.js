/*global angular, console */
var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', function ($scope, $filter) {
    "use strict";

    $scope.handle = '';
    $scope.toLower = function (str) {
        return $filter('lowercase')(str);
    };

    $scope.$watch('handle', function (newValue, oldValue) {
        console.info('Changed!');
        console.log('Old: ' + oldValue);
        console.log('New: ' + newValue);

    });
}]);
