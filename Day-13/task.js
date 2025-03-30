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
