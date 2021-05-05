//declaration of variables inside the index.html file
var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var pres = document.querySelector('.pressure');
var humi = document.querySelector('.humidity');
var desc = document.querySelector('.desc');
var spee = document.querySelector('.speed');
var degr = document.querySelector('.deg');
var button= document.querySelector('.submit');

//addEventListner() function added to check if button is clicked
button.addEventListener('click', function(){
  //specific id for user also added here for using values in the OpenWeatherMap API
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=your-api-key')
  .then(response => response.json())
  .then(data => {

  //getting content of the values of OpenWeatherMap API by using this structure
  var tempValue = data['main']['temp'];
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];
  var presValue = data['main']['pressure'];
  var humiValue = data['main']['humidity'];
  var speeValue = data['wind']['speed'];
  var degrValue = data['wind']['deg'];

  
  //displaying results to the user and required calculations 
  //and transformations from fahrenheit to celsius for some values
  main.innerHTML = nameValue;
  desc.innerHTML = "Description -> "+descValue;
  temp.innerHTML = "Temperature -> "+ (parseInt(tempValue) -273) + ' &#8451';
  pres.innerHTML = "Pressure -> "+presValue + ' mb';
  humi.innerHTML = "Humidity -> "+humiValue+"%";
  spee.innerHTML = "Wind speed -> "+(parseInt(speeValue) * 3.6) + "km/h" +" - degree -> "+ degrValue + '&#176';
  input.value ="";

})

//check if city exist in the OpenWeatherMap API database.
//if not pop-up and alert box and write wrong city name
.catch(err => alert("Wrong city name!"));
})

//function for making maps visible
function demoVisibility() {
  document.getElementById("frame").style.visibility = "visible";
}

//function for making maps invisible
function demoHidden() {
  document.getElementById("frame").style.visibility = "hidden";
}
