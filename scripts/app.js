var app = {};
//calculate m/s to km/h
app.convertSpeed = function(speed){
	return speed * 3.6;
}
app.init = function(){
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(app.getSpeed)
	}
}
app.getSpeed = function(position){
	console.log("Latitude:",position.coords.latitude)
	console.log("Longtitude:",position.coords.longtitude)
	console.log("Altitude:",position.coords.altitude)
	console.log("Speed:",position.coords.speed)
}