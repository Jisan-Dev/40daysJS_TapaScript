//1. What will be the output of the following code?
/*
try {
  let r = p + 50;
  console.log(r);
} catch (error) {
  console.log("An error occurred:", error.name);
} 
*/

//SOLUTION(q1): An error occurred: ReferenceError

//___________________________________________________________________________

// 2. Write a function processPayment(amount) that checks if the amount is positive and not exceeding balance. If any condition fails, throw appropriate errors.

function processPayment(amount) {
  let balance = 500;
  try {
    if (amount < 0) {
      throw new Error("You provided a negative/invalid amount!");
    } else if (amount >= balance) {
      throw new Error("Your amount is exceeding the balance!");
    } else {
      console.log("Valid amount");
    }
  } catch (error) {
    console.log("An error occurred:", error);
  }
}

processPayment(-1000);
