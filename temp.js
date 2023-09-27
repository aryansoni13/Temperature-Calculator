function convertTemperature() {
    var inputValue = parseFloat(document.getElementById("tempInput").value);
    var fromUnit = document.getElementById("fromUnit").value;
    var toUnit = document.getElementById("toUnit").value;
    var resultElement = document.getElementById("result");

    if (!isNaN(inputValue)) {
        if (fromUnit === "celsius" && toUnit === "fahrenheit") {
            var result = (inputValue * 9/5) + 32;
            resultElement.innerText = inputValue + "°C is " + result.toFixed(2) + "°F";
        } else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
            var result = (inputValue - 32) * 5/9;
            resultElement.innerText = inputValue + "°F is " + result.toFixed(2) + "°C";
        } else if (fromUnit === "celsius" && toUnit === "kelvin") {
            var result = inputValue + 273.15;
            resultElement.innerText = inputValue + "°C is " + result.toFixed(2) + "K";
        } else if (fromUnit === "kelvin" && toUnit === "celsius") {
            var result = inputValue - 273.15;
            resultElement.innerText = inputValue + "K is " + result.toFixed(2) + "°C";
        } else if (fromUnit === "fahrenheit" && toUnit === "kelvin") {
            var result = (inputValue - 32) * 5/9 + 273.15;
            resultElement.innerText = inputValue + "°F is " + result.toFixed(2) + "K";
        } else if (fromUnit === "kelvin" && toUnit === "fahrenheit") {
            var result = (inputValue - 273.15) * 9/5 + 32;
            resultElement.innerText = inputValue + "K is " + result.toFixed(2) + "°F";
        } else {
            resultElement.innerText = "Please select different units for conversion.";
        }
    } else {
        resultElement.innerText = "Please enter a valid temperature.";
    }
}
