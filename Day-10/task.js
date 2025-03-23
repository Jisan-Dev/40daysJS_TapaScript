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
