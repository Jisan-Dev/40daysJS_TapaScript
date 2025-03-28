//1. What will be the output and why?
const user = { name: "Alex", age: undefined };
console.log(user.age ?? "Not provided");

/* SOLUTION (for q1)
    the output will be 'Not provided', because of Nullish coalescing operator. (?)
    it returns the right hand operand if the left hand one is undefined or null
*/
