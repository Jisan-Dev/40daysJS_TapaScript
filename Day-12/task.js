//1. What will be the output and why?
const user = { name: "Alex", age: undefined };
console.log(user.age ?? "Not provided");

/* SOLUTION (for q1)
    the output will be 'Not provided', because of Nullish coalescing operator. (?)
    it returns the right hand operand if the left hand one is undefined or null
*/

// 2. What will happen if we try to modify a frozen object?

const object = Object.freeze({ a: 1 });
object.a = 2;
console.log(object.a); // 1

/* SOLUTION (for 2)
    nothing, we'll only get the original properties cause when we use freeze method means,
    we can't do any thing with object that become freeze.
*/
