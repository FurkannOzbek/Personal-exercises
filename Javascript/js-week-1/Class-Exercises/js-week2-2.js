// Todo: Create a function called getCircleArea. It should have the radius of the circle as parameter and return the circle area. What happens if we dont return anything in the function?

function getCircleArea(radcircle) {
  return 2 * Math.PI * radcircle;
}

console.log(getCircleArea(10));
// Create a function called celciusToFahreneit it should have a parameter called celcius. It should return the temperature in fahrenheit.

function celciusToFahreneit(celcius) {
  const degFahrenheit = (celcius * 9) / 5 + 32;
  return degFahrenheit;
}

console.log(celciusToFahreneit(25));

// Try call the function and check with google if the function returns the right value.

// Fah to Cel

function fahrenheittoCelcius(fahrenheit) {
  const degCelcius = ((fahrenheit - 32) * 5) / 9;
  return degCelcius;
}
console.log(fahrenheittoCelcius(77));
