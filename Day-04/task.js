// 1. What will be the output of this code snippet and why?
let day = "Monday";

switch (day) {
  case "monday":
    console.log("It's the start of the week.");
    break;
  default:
    console.log("It's a normal day.");
}
// Output: It's a normal day. It is because the variable 'day' containing the value 'Monday' that starts with capital M. in the switch case statement we are checking with the vale 'monday' that starts with smaller 'm' hence that condition will not apply and the default operations will be applied.

// 2. Build an ATM Cash Withdrawal System
const amount = 200;
if (amount % 100 === 0) {
  console.log("Withdrawal successful");
} else {
  console.log("Invalid amount");
}

// Build a Calculator with switch-case
const n1 = 10;
const n2 = 20;
const operator = "/";

switch (operator) {
  case "+":
    console.log(n1 + n2);
    break;
  case "-":
    console.log(n1 - n2);
    break;
  case "*":
    console.log(n1 * n2);
    break;
  case "/":
    console.log(n1 / n2);
    break;
  default:
    console.log("Invalid operator");
}

// 4. Pay for your movie ticket
let age = 68;

if (age < 18) {
  console.log("The price of the ticket is $3");
} else if (age >= 18 && age <= 60) {
  console.log("The price of the ticket is $10");
} else {
  console.log("The price of the ticket is $8");
}
