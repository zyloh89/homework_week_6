$(document).ready(function(){

    $('#run-search').click(function(){
        var city = $("#search-city").val();
        var queryURLweather = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric" + "&appid=e3d20716cd40dbab5b1e09117cc5c539";

        var queryURLforecast = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=metric" + "&appid=e3d20716cd40dbab5b1e09117cc5c539";
        var temperatureArray = [];

        if(city!= ''){
            $.ajax({
                url: queryURLweather,
                method: "GET",
                dataType:"jsonp",
                success: function(data){
                    console.log(data);
                    var widget = show(data);
                        $("#content").html(widget);
                        $("#search-city").val('');

            $("#CurrentWeather").append(widget);
                }

            })

        }
        else{
            $("error").html('Field cannot be empty');        
        }        
    
    });
});


function show(data){
    
    return "<h3 style='font-size:20px; font-weight:bold;'>" + data.name + ", " + data.sys.country + "<img src='http://openweathermap.org/img/wn/"+data.weather[0].icon+".png'>" + "</h3>"+
    
    "<p>Temperature: " + data.main.temp + "&deg;C</p>"+
    "<p>Humidity: " + data.main.humidity + "%</p>"+
    "<p>Wind Speed: " + data.wind.speed +"m/s</p>"+
    "<p>UV Index: " + data.main.temp +"</p>";

}



