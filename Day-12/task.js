//1. What will be the output and why?
const user = { name: "Alex", age: undefined };
console.log(user.age ?? "Not provided");

/* SOLUTION (for q1)
    the output will be 'Not provided', because of Nullish coalescing operator. (?)
    it returns the right hand operand if the left hand one is undefined or null
*/
//__________________________________________________________________________

// 2. What will happen if we try to modify a frozen object?
const object = Object.freeze({ a: 1 });
object.a = 2;
console.log(object.a); // 1

/* SOLUTION (for 2)
    nothing, we'll only get the original properties cause when we use freeze method means,
    we can't do any thing with object that become freeze.
*/

// 3. Given an object with deeply nested properties, extract name, company, and address.city using destructuring
const person = {
  firstName: "Tapas",
  company: {
    name: "tapaScript",
    address: {
      city: "Bangalore",
      zip: "94107",
    },
  },
};

//SOLUTION (for 3)
const {
  firstName,
  company,
  company: {
    address: { city },
  },
} = person;
console.log(firstName, city, company);
//_______________________________________________________________
