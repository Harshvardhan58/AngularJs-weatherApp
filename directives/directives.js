weatherApp.directive('weatherPanel',function(){
    return{
        templateUrl:'directives/weatherPanel.html',
        replace:true,
        scope:{
            weatherReport : '=',
            convertDate : '&',
            convertWeather : '&',
            dateFormat : '@'
        }
    }
});