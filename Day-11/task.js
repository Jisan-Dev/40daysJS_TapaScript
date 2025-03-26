// 1. What will be the output of the following code and why?
function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}
const counter = outer();
counter(); // 1
counter(); // 2

//reason: we know, when a function declared inside an outer function and that inner function has the access of all the variables from the outer function even after the execution of the outer function, that is called closure. when it closed on some variable it always remembers the previous value of those variables.
