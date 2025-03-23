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
