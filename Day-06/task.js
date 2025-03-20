// 1. Write a Function to Convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32 + "°F";
}
console.log(celsiusToFahrenheit(30));

// 2. Create a Function to Find the Maximum of Two Numbers
function findMax(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}
console.log(findMax(10, 5));
