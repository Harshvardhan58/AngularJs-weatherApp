weatherApp.controller('homeController',['$scope','$location','cityService',function($scope,$location,cityService){
    $scope.city=cityService.city;
    $scope.submit = function(){
        $location.path('/forecast');
    }
    $scope.$watch('city',function(){
        cityService.city=$scope.city;
    })
}]);
weatherApp.controller('forecastController',['$scope','cityService','weatherService','$routeParams',function($scope,cityService,weatherService,$routeParams){
    $scope.city=cityService.city;
    $scope.days=$routeParams.days || 2;
    $scope.weatherResult =weatherService.getWeather($scope.city,$scope.days,'d9720c952e92ab2fd642174144cc9d2d');
    
    $scope.convertWeather =function(temp){
        return Math.round((temp-273)*100)/100;
    }
    
    $scope.convertDate = function(dt){
        return new Date(dt*1000);
    }

}]);