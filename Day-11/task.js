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

// 2. What will be the output and why?
function testClosure() {
  let x = 10;
  return function () {
    return x * x;
  };
}
console.log(testClosure()()); // 100

// reason : reason is closure inner function access outer function and multiply x * x. first the testClosure() func executes, the x variable closed to the returned inner function, then the inner function executes using the closed "X" variable value.

// 3. Create a button dynamically and attach a click event handler using a closure. The handler should count and log how many times the button was clicked.
function buttonClick() {
  let number = 0;
  document.getElementById("handleClick").addEventListener("click", function () {
    number++;
    console.log("Button Click", number, "Item");
  });
}

buttonClick();
