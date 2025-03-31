//1. Create a table of two columns, `situation` and `value`. Now add the rows for every situations and the value of `this` in that situation. Please cover the following situations
/**
  - At the Global
  - Inside an Object Method
  - Inside the Standalone non-Arrow Function
  - Inside an Arrow Function(standalone)
  - Inside an Arrow Function(as object method)
  - Inside an object created with the Constructor Function

  Please add examples for each of the scenarios.
 */
/*SOLUTION(for q1): go to "./thisKeyword.png" */

//__________________________________________________________________________________

//2.  What is the problem here? Fix it to log the correct name and explain the fix
/*
const user = {
  name: "tapaScript",
  greet: () => {
    console.log(`Hello, ${this.name}!`);
  },
};

user.greet();
*/

/*SOLUTION (for q2):: The reason we're getting undefined from ${this.name} is because as per the rules, if the 'this' keyword used inside a arrow func it always check in the parent scope of where the arrow function is lexically placed(lexical scope). to fix this we can use this console.log(`Hello, ${this.name}!`); inside another block like {console.log(`Hello, ${this.name}!`)} or we can convert the arrow function to normal traditional function "function(){console.log(`Hello, ${this.name}!`);}" */

//_______________________________________________________________________________________________

//## 3. Can you explain what is the problem here and fix the issue to log the correct name?

const obj = {
  name: "Tom",
  greet: function () {
    console.log(`Hello, ${this.name}!`);
  },
};

const greetFn = obj.greet;
greetFn(); // Logs: "Hello, undefined!"

/*SOLUTION(for q3): 
The issue is that greetFn is assigned to obj.greet, but it's called without an explicit this binding.

When greetFn() is invoked, this inside greet() refers to the global object (window in browsers or undefined in strict mode), not obj.

As a result, this.name is undefined, and it logs "Hello, undefined!".

To fix this, we need to explicitly bind this to obj using .call(), .apply(), or .bind():
 */
// 1. Using call()
greetFn.call(obj); // Logs: "Hello, Tom!"

// 2. Using apply()
greetFn.apply(obj); // Logs: "Hello, Tom!"

// 3. Using bind()
const boundGreet = greetFn.bind(obj);
boundGreet(); // Logs: "Hello, Tom!"

//_______________________________________________________________________________________________
