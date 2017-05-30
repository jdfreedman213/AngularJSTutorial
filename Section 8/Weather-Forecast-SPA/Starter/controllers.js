weatherApp.controller('homeController', ['$scope', '$log', 'forecastService', function($scope, $log, forecastService) {
    $scope.city = forecastService.city;
    $scope.$watch('city', function() {
        forecastService.city = $scope.city;
    });

}]);

weatherApp.controller('forecastController', ['$scope', '$log', '$resource', '$routeParams', 'forecastService', function($scope, $log, $resource, $routeParams, forecastService) { 
    $scope.city = forecastService.city;
    $scope.days = $routeParams.days || '2';
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

