var app = {};
//calculate m/s to km/h
app.convertSpeed = function(speed){
	return speed * 3.6;
}
app.init = function(){
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(app.getData,app.failData,{enableHighAccuracy:true,maximumAge:0})
	}
}
app.getData = function(position){
	console.log("Latitude:",position.coords.latitude)
	console.log("Longtitude:",position.coords.longitude)
	console.log("Altitude:",position.coords.altitude)
	console.log("Speed:",position.coords.speed)
	document.querySelector("#locationdata").innerHTML = "Latitude: " + position.coords.latitude+ ", Longtitude: " + position.coords.longitude +", Altitude:"+position.coords.altitude+", Speed:"+position.coords.speed
}
app.init()