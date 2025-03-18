// 1. Odd or Even
const number = 2;
if (number % 2 === 0) {
  console.log(number + " is an even number");
} else {
  console.log(number + " is an odd number");
}

// 2. Do you have a Driving License?
const age = 2;
if (age >= 18) {
  console.log("You are eligible");
} else {
  console.log("You are not eligible");
}

// 3. Calculate CTC with a Bonus
const monthlySalary = 12300;
// calculate yearly salary with 20% bonus on annual salary
const yearlySalary = monthlySalary * 12;
const bonus = yearlySalary * 0.2;
const totalSalary = yearlySalary + bonus;
console.log(totalSalary);

// 4. Write a program for the Traffic Light Simulation.
const color = "green";
switch (color) {
  case "red":
    console.log("STOP!");
    break;
  case "green":
    console.log("GO!");
    break;
}

// 5. Create an Electricity Bill Calculator
const units = 12; // each day usage
const eachUnitCost = 150;

const perMonthCost = units * eachUnitCost * 30;
console.log("[per month cost]", perMonthCost);

const yearlyCost = perMonthCost * 12;
console.log("[yearly cost before discount]", yearlyCost);

const yearlyCostAfterDiscount = yearlyCost - yearlyCost * 0.2;
console.log("[yearly cost after discount]", yearlyCostAfterDiscount);

// 6. Leap Year Checker. Is 2025 a Leap Year?
const year = 2023;
if (year % 4 === 0) {
  if (year % 100 !== 0 || year % 400 === 0) {
    console.log(year + " is a leap year");
  } else {
    console.log(year + " is not a leap year");
  }
} else {
  console.log(year + " is not a leap year");
}
//do the same using ternary operator
year % 4 === 0
  ? year % 100 !== 0 || year % 400 === 0
    ? console.log(year + " is a leap year")
    : console.log(year + " is not a leap year")
  : console.log(year + " is not a leap year");

// 7. Max of Three Numbers
const p = 18;
const q = 13;
const r = 14;
if (p > q && p > r) {
  console.log("P is greater than Q and R");
} else if (q > p && q > r) {
  console.log("Q is greater than P and R");
} else {
  console.log("R is greater than P and Q");
}

// ! Bitwise Doubling
/*
A tricky one for you

-> Create a variable count and assign a value, say, 5.
-> Now use the Bitwise shift operator to make the number double.
-> Print it on the console.
 */
let count = 5; //101 (binary/ bitwise representation)
count = count << 1; // 1010 = 0 * (2 ** 0) + 1 * (2 ** 1) + 0 * (2 ** 2) + 1 * (2 ** 3) = 10
console.log(count);
// 5/2 = 2 (1)
// 2/2 = 1 (0)  101
