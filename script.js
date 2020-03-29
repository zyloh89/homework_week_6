$(document).ready(function(){

    $('#run-search').click(function(){
        var city = $("#search-city").val();
        var queryURLweather = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric" + "&appid=e3d20716cd40dbab5b1e09117cc5c539";
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

                        //http://api.openweathermap.org/data/2.5/uvi?appid={appid}&lat={lat}&lon={lon}
                }

            })


        }
        else{
            $("error").html('Field cannot be empty');        
        }        
    });
});

//let $currentDay = $('#navbar-subtitle');
  //  $currentDay.text(now);

function show(data){
    //let $currentDay = $('#navbar-subtitle');
    //$currentDay.text(now);
    
    return "<h3 style='font-size:20px; font-weight:bold;'>" + data.name + ", " + data.sys.country + "<img src='http://openweathermap.org/img/wn/"+data.weather[0].icon+".png'>" + "</h3>"+
    
    "<p><strong>Temperature</strong>: " + data.main.temp + "&deg;C</p>"+
    "<p><strong>Humidity</strong>: " + data.main.humidity + "%</p>"+
    "<p><strong>Wind Speed</strong>: " + data.wind.speed +"m/s</p>"+
    "<p><strong>UV Index</strong>: " + data.main.temp +"</p>";
}