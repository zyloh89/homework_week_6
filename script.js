$(document).ready(function(){

    $('#run-search').click(function(){
        var city = $("#search-city").val();
        var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric" + "&appid=e3d20716cd40dbab5b1e09117cc5c539";
        if(city!= ''){
            $.ajax({
                url: queryURL,
                method: "GET",
                dataType:"jsonp",
                success: function(data){
                    console.log(data);

                }

            })


        }
        else{
            $("error").html('Field cannot be empty');        
        }

    });

})