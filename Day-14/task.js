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
    console.error("An error occurred:", error);
  }
}

processPayment(-1000);

//___________________________________________________________________________

// 3. Implement a custom error handling system for an e-commerce website that categorizes errors as
/**
 * - UserError
 * - PaymentError
 * - ServerError
 * - EmailError
 */

// UserError implementation
function UserError(message) {
  this.name = "UserError";
  this.message = message;
  this.stack = new Error().stack;
}

UserError.prototype = Object.create(Error.prototype);

function validateUserAge(age) {
  if (age < 18) {
    throw new UserError("Forbidden User!");
  }
  return "User signed up";
}

try {
  const msg = validateUserAge(19);
  console.log("user validation:", msg);
} catch (error) {
  console.error(`${error.name}: ${error.message}`);
}

// PaymentError implementation
function PaymentError(message) {
  this.name = "PaymentError";
  this.message = message;
  this.stack = new Error().stack;
}
PaymentError.prototype = Object.create(Error.prototype);

function validatePayment(amount) {
  if (!isNaN(amount)) {
    throw new PaymentError("Invalid payment input");
  }
  return "Payment Successful!";
}

try {
  const msg = validatePayment("1200");
  console.log(msg);
} catch (error) {
  console.error(`${error.name}: ${error.message}`);
  console.log(error.stack);
}

// ServerError -
function ServerError(message) {
  this.name = "ServerError";
  this.message = message;
  this.stack = new Error().stack;
}

ServerError.prototype = Object.create(Error.prototype);

function checkServerError(serverStatus) {
  if (!serverStatus) {
    throw new ServerError(`${serverStatus}: server request was not complete .......`);
  }
  console.log(`Server request was completed`);
}

try {
  checkServerError(false);
} catch (error) {
  console.error(`${error.name}: ${error.message} ; stack: ${error.stack}`);
}

// EmailError -

function EmailError(message) {
  this.name = "EmailError";
  this.message = message;
  this.stack = new Error().stack;
}

EmailError.prototype = Object.create(Error.prototype);

function checkEmail(email) {
  if (!email.includes("@")) {
    throw new EmailError(`${email}: is an Invalid email`);
  }
  console.log(`Valid email good to go`);
}

try {
  checkEmail("lrem123gmail.com");
} catch (error) {
  console.error(`${error.name}: ${error.message}`);
}

//___________________________________________________________________________

// 4. Simulate an API call function fetchData(url). If the URL does not start with "https",
// throw an "Invalid URL" error. Handle it using try...catch

function fetchData(url) {
  if (!url.startsWith("https")) {
    throw new Error("Invalid URL");
  }
  return "data";
}

try {
  const data = fetchData("http://somethhkjs.com");
  console.log(data);
} catch (error) {
  console.error(`${error.name}: ${error.message}`);
}

//___________________________________________________________________________
