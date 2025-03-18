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
