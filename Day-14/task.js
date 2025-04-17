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

// 5. Implement a custom error type ValidationError using constructor functions to handle form validation errors
function ValidationError(message) {
  this.name = "ValidationError";
  this.message = message;
  this.stack = new Error().stack;
}

ValidationError.prototype = Object.create(Error.prototype);

function validateUser(userInput) {
  if (!userInput.username || userInput.username === "") {
    throw new ValidationError("Username cannot be empty");
  } else if (!userInput.age || userInput.age < 0 || !typeof userInput.age !== "number") {
    throw new ValidationError("Age must be a positive number");
  }
}

try {
  const msg = validateUser({ username: "as", age: -2 });
  console.log(msg);
} catch (error) {
  console.error(`${error.name}: ${error.message}`);
}

//___________________________________________________________________________

// 6. Write a function readFile(filePath) that simulates reading a file.
// If the file does not exist (simulate with a condition), throw a "File not found" error.
// Handle the error with try...catch.
// Make sure you have code to handle releasing the IO resources

// Please note, you do not have to implement the actual IO operation here.
// Just use the console.log to simulate them. {NB}

function readFile(filePath) {
  console.log("File path checking started .......");
  try {
    if (filePath === "" || !(filePath.startsWith("C:") || filePath.startsWith("D:"))) {
      throw new Error("File was not found");
    }
    console.log("File found");
  } catch (error) {
    console.error(`${error.name} ${error.stack}`);
  } finally {
    console.log("File path checking completed");
  }
}

readFile(`DUsers\\Hassan\\Documents\\file.txt`);

//___________________________________________________________________________

// 7. Write a function parseJson(str) that takes a JSON string and tries to parse
// it using JSON.parse().If parsing fails, catch the error and return "Invalid JSON"

function parseJson(str) {
  try {
    return JSON.parse(str);
  } catch (error) {
    return `Invalid Json: ${error}`;
  }
}
console.log(parseJson('{name:"hassan" }'));

//___________________________________________________________________________
