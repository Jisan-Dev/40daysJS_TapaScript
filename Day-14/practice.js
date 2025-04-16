//rethrow
function validateForm(formData) {
  try {
    if (!formData.userName) throw new Error("Username is Mandatory");
    if (!formData.email.includes("@")) throw new Error("Invalid email format!");
  } catch (error) {
    console.error("Validation Issues Found:", error.message);
    throw error; //rethrow
  }
}

try {
  validateForm({ userName: "Lorem", email: "bademail" });
} catch (error) {
  console.error("Showing error message for user creation:", error.message);
}

// Custom Error
function ValidationError(message) {
  this.name = "ValidationError";
  this.message = message;
  this.stack = new Error().stack;
}

// ValidationError.prototype = Object.create(Error.prototype);

function validateCitizen(age) {
  if (age < 60) {
    throw new ValidationError("You are not a senior citizen");
  }
  return "You are a senior citizen";
}

try {
  const msg = validateCitizen(15);
  console.log(msg);
} catch (error) {
  console.error(`${error.name}: ${error.message}`);
  console.log(error.stack);
}

// Self Assignment Operator ?=

let x;
let y = 10;

//x ?= 20; // x is undefined, so x becomes 20
//y ?= 30; // y is already 10, so y remains 10

console.log(x); // Output: 20
console.log(y); // Output: 10
