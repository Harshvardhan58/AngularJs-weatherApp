weatherApp.service('cityService',function(){
    this.city="New York, NY";
});

weatherApp.service('weatherService',['$resource',function($resource){
    this.getWeather=function(city,days,appid){
    var weatherApi = $resource("http://api.openweathermap.org/data/2.5/forecast",{callback:"JSON_CALLBACK"},{get:{method:"JSONP"}});
    return weatherApi.get({q:city,APPID:appid,cnt:days});
    }
}]);