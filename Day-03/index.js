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
