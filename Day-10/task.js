// 1. What will be the output of the following code and why?
let user = "Alice";

function outer() {
  function inner() {
    console.log(user);
  }
  let user = "Bob";
  inner();
}
outer();
// ans : Bob
// because at the time of FEC of outer function user variable's value is "Bob" which we are trying to log inside from the inner function. Inner func will first check if it has any variable called user in its own scope. When it won't find the user variable inside it's own block, it will start looking for its immediate outer block because of scope chaining, then it will find the variable user with its value "Bob" from that outer block scope.

// 2. What is the mistake in the code below?
let total = 0; // Global, bad practice

function add(num) {
  total += num;
}

add(5);
add(10);
console.log(total);
// Answer : 15 , code is ok

// 3. Create a function with a nested function and log a variable from the parent function.
function parent() {
  function child() {
    console.log(parentName);
  }
  let parentName = "Istiak Kashem Jisan";
  child();
}
parent();
// Ans : Istiak Kashem Jisan

// 4. Use a loop inside a function and declare a variable inside the loop. Can you access it outside?
function sayName() {
  for (let i = 0; i <= 10; i++) {
    let name = "Istiak Jisan";
  }
}
sayName();
console.log(name); // Reference Error
//Reason: when we declare variable using let and const it cant be accessed outside because they're block scoped

// 5. Write a function that tries to access a variable declared inside another function.
function outer() {
  let color = "Black";
  function inner() {
    console.log(color);
  }
  inner();
}
outer();

// 6. What will be the output and why?
// console.log(a); // Reference Error
// let a = 10;

// reason  we can't access let and const variable before initialization and at the time of execution phase  it falls into TDZ hence resulting to reference error

// 7. Where is the age variable accessible?
function showAge() {
  let age = 25; // only inside this block this age variable is accessible
  console.log(age); // only inside this block this age variable is accessible
}

function outer() {
  let message = "Hi";

  function inner() {
    console.log(message);
  }

  inner();
}

outer();
// Ans : Hi
// Reason : when we declare global variable and inside function variable first priority is inside function variable, when function variable not available then access global variable ,due to scope chaining, this is call variable shadowing

// 9. What will be the output and why?
let x = "Global";

function outer() {
  let x = "Outer";

  function inner() {
    let x = "Inner";
    console.log(x);
  }

  inner();
}

outer();

// Ans : Inner
// reason : when we declare global variable, then function variable then or nested function, variable first accessible to nested func/scope, if not available then check outer function/scope to find that variable, if not available then access global variable. (scope chaining)

// 10. What will be the output and why?
function counter() {
  let count = 0;
  return function () {
    count--;
    console.log(count);
  };
}

const reduce = counter();
reduce(); // -1
reduce(); // -2

// reason : when we declare or return function from inside another function, inner function can access any variable of outer function and use them
