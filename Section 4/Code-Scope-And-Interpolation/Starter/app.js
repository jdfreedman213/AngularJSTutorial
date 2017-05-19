/*global angular */
var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$timeout', function ($scope, $timeout) {

    "use strict";
    $scope.name = 'Jeff';

    $timeout(function () {
        $scope.name = 'Everbody';
    }, 3000);

}]);
