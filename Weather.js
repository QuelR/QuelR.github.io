// JavaScript source code
var input = document.querySelector(.input);
var city = document.querySelector(.city_name);
var temperature = document.querySelector(.temperature);
var humidity = document.querySelector(.humidity);
var weather = document.querySelector(.weather);
var button = document.querySelector(.submit);
button.addEventListener('click', function (name) {
    fecth('api.openweathermap.org/data/2.5/weather?q=' + input.value + '&appid={API key}&units=metric')
        .then(response => response.json())
        .then(data => {
            var tempValue = data['main']['temp'];
            var cityValue = data['name'];
            var weatherValue = data['weather'][0]['description'];
            var humidityValue = data['main']['humidity'];

            city.innerHTML = "weather at " + cityValue;
            weather.innerHTML = "weather: " + weatherValue;
            temperature.innerHTML = "temperature: " + tempValue + " celcius";
            humidity.innerHTML = "humidity: " + humidityValue;
        })
        .catch(err => alert("wrong city name!"));