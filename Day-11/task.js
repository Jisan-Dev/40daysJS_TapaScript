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

// 4. Write a function createMultiplier(multiplier) that returns another function to multiply numbers.

function createMultiplier(multiplier) {
  return function (number) {
    console.log(number * multiplier);
  };
}

const multiply = createMultiplier(10);
multiply(10);

// 5. What happens if a closure references an object?

// 01. The object is garbage collected immediately
// 02. The object remains in memory as long as the closure exists
// 03. The object is automatically cloned
// 04. None of the Above.

// Ans : 02. The object remains in memory as long as the closure exists
//Closures in JavaScript "capture" variables from their surrounding lexical scope. If a closure references an object, that object is not garbage collected as long as the closure (or any function that uses the closure) is still accessible. This can sometimes lead to memory leaks if references to closures persist unnecessarily.

// 6. Write a function factory of counter to increment, decrement, and reset a counter. Use closure to refer the count value across the functions.

const counterFactory = () => {
  let count = 0;
  return {
    increment: () => {
      count++;
      console.log("postIncrement:", count);
    },
    decrement: () => {
      count--;
      console.log("postDecrement:", count);
    },
    reset: () => {
      count = 0;
      console.log("postReset:", count);
    },
  };
};

let counter1 = counterFactory();
counter1.increment(); //1
counter1.increment(); //2
counter1.increment(); //3
counter1.decrement(); //2
counter1.reset(); //0
