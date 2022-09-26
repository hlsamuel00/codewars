// DESCRIPTION:
// Debug celsius converter
// Your friend is traveling abroad to the United States so he wrote a program to convert fahrenheit to celsius. Unfortunately his code has some bugs.

// Find the errors in the code to get the celsius converter working properly.

// To convert fahrenheit to celsius:

// celsius = (fahrenheit - 32) * (5/9)
// Remember that typically temperatures in the current weather conditions are given in whole numbers. It is possible for temperature sensors to report temperatures with a higher accuracy such as to the nearest tenth. Instrument error though makes this sort of accuracy unreliable for many types of temperature measuring sensors.

// Code provided:
function weatherInfo (temp) {
    var c : convert(temp)
    if (c > 0)
      return (c + " is freezing temperature")
    else
      return (c + " is above freezing temperature")
  }
  
  function convertToCelsius (temperature) {
    var celsius = (tempertur) - 32 + (5/9)
    return temperature
  }


// Updated Code:
function weatherInfo (temp) {
    let c = convertToCelsius(temp)
    if(c < 0){
      return (c + " is freezing temperature")
    } else{
      return (c + " is above freezing temperature")
    }
  }
  
  function convertToCelsius (temperature) {
    var celsius = (temperature - 32) * (5/9)
    return celsius
  }

// My code:
const weatherInfo = (temp) => `${convertToCelsius(temp)} ${convertToCelsius(temp) > 0 ? "is above freezing temperature" : "is freezing temperature"}`

const convertToCelsius = (temperature) => (temperature - 32) * (5/9)
