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

// 3. Function to Check if a String is a Palindrome using for loop
function isPalindrome(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  if (str === reversed) {
    return true;
  } else {
    return false;
  }
}
console.log(isPalindrome("madam"));

// 4. Write a Function to Find Factorial of a Number
function factorial(num) {
  let result = 1;
  for (let i = num; i > 0; i--) {
    result *= i;
  }
  return result;
}
console.log(factorial(5));

//5. Write a function to Count Vowels in a String
function countVowels(str) {
  let vowelsInStr = "";
  for (let i = 0; i < str.length; i++) {
    switch (str[i].toLowerCase()) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
        vowelsInStr += str[i];
        break;
    }
  }
  console.log(`The number of vowels inside "${str}" is ${vowelsInStr.length} and they are '${vowelsInStr}'`);
}

countVowels("Hello World");
