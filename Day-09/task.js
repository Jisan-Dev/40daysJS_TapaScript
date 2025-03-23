// ! Explain Temporal Dead Zone by creating 3 variables inside a block. Post the code as your answer.
// note: The Temporal Dead Zone (TDZ) in JavaScript is the period between the hoisting of a variable declared with let or const and its actual declaration, during which the variable cannot be accessed and attempting to do so results in a ReferenceError. This feature is designed to prevent developers from accidentally using variables before they are declared, which can lead to hard-to-debug errors.

{
  // for name, friendName -> TDZ started from here (beginning of the block)
  //
  console.log(name); //ReferenceError: Cannot access 'name' before initialization
  //
  //
  let name = "Alex"; // name -> TDZ ends here. (when meets the actual initialization/declaration)
  // console.log(name) Alex   // no error
  //
  //
  // console.log(friendName) // ReferenceError: Cannot access 'name' before initialization
  //
  //
  let friendName = "John"; // friendName TDZ zone end
  // console.log(friendName) John //no error
  //
  //
  // console.log(FavoriteColor) // referenceError
  //
  let favoriteColor = "purple";
  // console.log(favoriteColor) purple //no error
}

// Explain Variable and Function Hoisting with Example. Post the code as your answer.
/*
 Hoisting in JavaScript is the process where variable and function declarations are moved to the top of their scope during the creation phase of execution. This occurs in both the global execution context and function execution context before the actual code runs 
 */

// var keyword
console.log("name is", name); // undefined
var name;
name = "Alex Paul";
console.log("name is", name); // Alex Paul

// let keyword
console.log("friend name is", friendName); // Reference Error
let friendName;
friendName = "John";
console.log("Friend Name is", friendName); // John

// const keyword
console.log("Favorite Color is", color); // Reference Error
const color = "Black"; // we can't just declare variable without initialization when using the keyword const
console.log("Favorite Color is", color); // Color

// function hoisting

// invoke function, sayName
sayName();

// declare function sayName
function sayName() {
  console.log("My name is Alex Paul");
  // invoke function myFriendName
  myFriendName();
}

// function declare myFriendName
function myFriendName() {
  console.log("My friend Name is John");
}

// Function Hoisting as a Expression

// invoke function
fullName(); // fullName is not a function, reason: fullName is variable and variable value is function and execution context creation phase variable value undefined , that why fullName function is not a function

// declare function fullName
var fullName = function () {
  console.log("My full Name is Alex Paul");
};
