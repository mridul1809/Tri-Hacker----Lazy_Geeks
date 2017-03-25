$(document).ready(function(){

	$('#submit').click(function(){
		var city = $("#city").val();

		if(city!= '')
		{
			$.ajax(
			{
				url : 'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=metric" + "&APPID=c3d94d36dbd2e044963226d6a1e25edd" ,
				type : "GET",
				dataType: "jsonp" ,
				success : function(data)
				{
					var widget = show(data);
					$("#show").html(widget);
					$("#city").val('');
				}
			});
		}
		else
		{
			$("#error").html('Field Cannot Be Empty!!!');
		}


	});

});

function show(data)
{
	return 	"<h1>Current Weather for " + data.name + ", " + data.sys.country + "</h1>" +
			"<h2><strong>Weather</strong> : "+ data.weather[0].main +"</h2>" + 
			"<h2><strong>Description</strong> : "+ data.weather[0].description +"</h2>" + 
			"<h2><strong>Temperature</strong> : "+ data.main.temp +"</h2>" + 
			"<h2><strong>Pressure</strong> : "+ data.main.pressure +"</h2>" + 
			"<h2><strong>Humidity</strong> : "+ data.main.humidity +"</h2>" + 
			"<h2><strong>Minimum Temperature</strong> : "+ data.main.temp_min +"</h2>" + 
			"<h2><strong>Maximum Temperature</strong> : "+ data.main.temp_max +"</h2>" + 
			"<h2><strong>Wind Speed</strong> : "+ data.wind.speed +"</h2>" + 
			"<h2><strong>Wind Direction</strong> : "+ data.wind.deg +"</h2>";
}