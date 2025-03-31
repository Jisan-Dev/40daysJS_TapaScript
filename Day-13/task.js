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

//!__________________________________________________________________________________

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

//!_______________________________________________________________________________________________

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

//!_______________________________________________________________________________________________

//4. What is the problem with the following code? Why isn't it logging the name correctly?
const user = {
  name: "Alex",
  greet: function () {
    function inner() {
      console.log(`Hello, ${this.name}!`);
    }
    inner();
  },
};

user.greet();

/*SOLUTION(q4): 
The issue here is with how this behaves inside the inner function.
-user.greet() is called, so inside greet(), this correctly refers to user.
-However, inner() is a regular function (not an arrow function or a method) and is invoked normally (not as user.inner()).
-In JavaScript, when a regular function is called, this defaults to undefined in strict mode ('use strict'). & The global object (window in browsers, global in Node.js) in non-strict mode.
-Since this inside inner() does not refer to user, this.name becomes undefined, resulting in "Hello, undefined!"

- to solve we can use arrow func as the inner function. cause in case of arrow function it takes from the parent scope of where it is lexically defined.
- we can also bind the user while invoking inner func. for eg. inner.bind(this)(); // Bind `this` to `user` as we have the access of 'this' there.
 */

//!_______________________________________________________________________________________________

//5.Create a `Sports` constructor function that takes `name` and `number of players` as arguments and assigns them using `this` keyword. Then, create two sports instances and log their details

function Sports(name, totalPlayers) {
  this.name = name;
  this.totalPlayers = totalPlayers;
}

const cricket = new Sports("cricket", 11);
console.log(cricket);
const football = new Sports("football", 11);
console.log(football);

//!_______________________________________________________________________________________________

//6.Can you attach the car1's `describe()` method to car2 object? Give all possible solutions that you can think of
const car1 = {
  brand: "Audi",
  model: "A8",
  describe: function () {
    console.log(`This car is a ${this.brand} ${this.model}.`);
  },
};

const car2 = {
  brand: "BMW",
  model: "X1",
};

//SOLUTION(q6):
//1.Direct Assignment: You can directly assign car1.describe to car2.describe, so both objects share the same function reference.
car2.describe = car1.describe;
car2.describe(); // Logs: "This car is a BMW X1."

//2. Using call(): The call() method allows you to invoke describe() while explicitly setting this to car2.
car1.describe.call(car2); // Logs: "This car is a BMW X1."

//3. Using apply(): apply() is similar to call(), but it takes arguments as an array.
car1.describe.apply(car2); // Logs: "This car is a BMW X1."

//4. Using bind(): bind() returns a new function with this permanently set to car2, so you can call it later.
const describeCar2 = car1.describe.bind(car2);
describeCar2(); //Logs: "This car is a BMW X1."

//5. 5. Adding describe to car2 via Object.assign(): This copies the describe method from car1 to car2.
Object.assign(car2, { describe: car1.describe });
car2.describe();

//6. Using Object.create(): This makes car2 inherit from car1, meaning it will have access to describe().
const Car2 = Object.create(car1);
console.log(Car2);
console.log(Car2.__proto__);
Car2.brand = "BMW"; //{}
Car2.model = "X1"; //{ brand: 'Audi', model: 'A8', describe: [Function: describe] }
Car2.describe(); // Logs: "This car is a BMW X1."
console.log(Car2); //{ brand: 'BMW', model: 'X1' }

/*// note
-Object.create(car1) makes car1 the prototype of car2, but car2 itself starts empty.

-Properties are inherited but not owned, so console.log(car2) appears empty.

-To add properties to car2, you must assign them explicitly.
*/

/**
 * Which Solution is Best?
If you want both objects to have independent methods, use direct assignment (car2.describe = car1.describe).

If you need a one-time invocation, use call() or apply().

If you want a permanently bound function, use bind().

If car2 should inherit from car1, use Object.create() or Object.setPrototypeOf().
 */

//!_______________________________________________________________________________________________

//7. What will be the output of the following code and why?
const person = {
  name: "Charlie",
  sayHello: function () {
    console.log(this.name);
  },
  sayHelloArrow: () => {
    console.log(this.name);
  },
};

person.sayHello();
person.sayHelloArrow();
/*
Options are:

- A: "Charlie" and "Charlie"
- B: "Charlie" and undefined
- C: "Charlie" and "" (empty string)
- D: undefined and "Charlie"
 */

// SOLUTION(q7):
// Ans : B: "Charlie" and undefined
// reason : arrow function object method refer parent scope of the lexical scope of where it is placed and normal regular function refer as a same object when using as a method not as a standalone func.
