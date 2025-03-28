let user = {
  name: "tapas",
  age: 40,
  "is admin": true,
};

console.log(user.name); // "tapas"
console.log(user.age); // 40

user.isSeniorCitizen = false;
user["movie lover"] = true;

console.log(user);
console.log(user["is admin"]);

delete user["movie lover"];
console.log(user);

// Dynamically access
const someKey = "age"; // lets assume we are getting the age string as value dynamically maybe from a input form(e.target.key) and resolving in someKey variable

console.log(user[someKey]);

// Constructor Function
function Car(name, model) {
  this.name = name;
  this.model = model;
}

const bmwCar = new Car("BMW", "X1");
const audiCar = new Car("Audi", "A8");
console.log(bmwCar);
console.log(audiCar);

//factory
function createUser(name, age) {
  return {
    name,
    age,
    greet() {
      console.log("Hello,", this.name, "your age is", this.age, "years old");
    },
  };
}

const user1 = createUser("jisan", 25);
console.log(user1);
console.log(user1.name);
user1.greet();

const user2 = createUser("bob", 32);
user2.greet();

// nested
let profile = {
  name: "tapas",
  company: "CreoWis",
  message: function () {
    console.log(`${this.name} works at ${this.company}`);
  },
  address: {
    city: "Bangalore",
    pin: 56032,
    state: "Karnataka",
    country: "India",
    greeting: function () {
      console.log("Welcome to India");
    },
  },
};

// for ... in
for (let key in profile) {
  console.log(key, ":", profile[key]);
}

// method to take all the keys of an object into an array
console.log(Object.keys(profile));

console.log(profile.salary); // undefined
console.log("salary" in profile); // false // better to use because undefined can be a value of the key "salary" so it will return the value undefined but we want tp check if the "salary" key/property even exists or not.

// if ("salary" in profile === false) {
//   console.log("The salary property doesn't exist");
// }
if (!profile.salary) console.log("The salary property doesn't exist");

profile.message();
profile.address.greeting();

// Object Reference
let fruit = { name: "mango" }; // XA01
const oneMoreFruit = { name: "mango" }; // YB02

console.log(fruit == oneMoreFruit); // false
console.log(fruit === oneMoreFruit); // false

fruit = oneMoreFruit; // now pointing to the same reference

console.log(fruit == oneMoreFruit); // true
console.log(fruit === oneMoreFruit); // true

// Static Methods
const target = { p: 1, a: 2 };
const source = { a: 3, b: 5 };

const returnedObj = Object.assign(target, source); // assigning source to target. so the target's "a" will be overwritten by source's "a". resulting { p: 1, a: 3, b: 5 }
console.log(returnedObj); //{ p: 1, a: 3, b: 5 }

const obj = { name: "tapaScript" };
const obj2 = Object.assign({}, obj);
console.log(obj2);

console.log(obj === obj2); // false. both are in different memory address. obj2 is the new copy of obj1(shallow copy)

//---------------

const obj3 = {
  a: 1,
  b: { c: 2 },
};
const obj4 = Object.assign({}, obj3);
// console.log(obj4); // {a: 1, b: {c: 2}}
// obj4.b.c = 3;

// obj4.a = 100;

// console.log(obj4.a); // 100
// console.log(obj3.a); // 1

// console.log(obj4.b.c) // 3
// console.log(obj3.b.c) // 3
// because of shallow copy, the nested copy's reference got copied hence mutating the original object

//deep copy
const obj5 = structuredClone(obj3);
// console.log(obj5); //{ a: 1, b: { c: 2 } }

obj5.a = 100;
obj5.b.c = 200;
console.log(obj5.a); //100
console.log(obj3.a); //1

console.log(obj5.b.c); //200
console.log(obj3.b.c); //2

//-------------
const myObj = {
  a: "tapas",
  b: 32,
};

const myArr = Object.entries(myObj);
console.log(myArr);

const entries = new Map([
  ["foo", "bar"],
  ["baz", 42],
]);
console.log(entries);

const objEntries = Object.fromEntries(entries);
console.log(objEntries);

//-----------------------------------
//static methods

const emp = {
  sal: 100,
};

Object.freeze(emp); // now we can't do anything with emp object. That object is now frozen.

console.log(Object.isFrozen(emp)); //true

const dept = {
  name: "finance",
};

Object.seal(dept); // we can only update/modify the existing property

dept.address = "uganda";
// console.log(dept); //{ name: 'finance' }
dept.name = "HR";
// console.log(dept); //{ name: 'HR' }

console.log(Object.hasOwn(dept, "address"));

//-----------------------------------------------
console.log("Learn Object Destructuring....");

const student = {
  name: "John Williamson",
  age: 9,
  std: 3,
  subjects: ["Maths", "English", "EVS"],
  parents: {
    father: "Brown Williamson",
    mother: "Sophia",
    email: "john-parents@abcde.com",
  },
  address: {
    street: "65/2, brooklyn road",
    city: "Carterton",
    country: "New Zealand",
    zip: 5791,
  },
};

// const { name, age, meal = "bread" } = student;
// console.log(name, age, meal);

const { std: standard } = student; // Alias
console.log(standard);

const { subjects, totalSubjects = subjects.length } = student; // declaring new var while destructuring
console.log(totalSubjects, "subjects", subjects);

const {
  address: { zip },
} = student;
console.log(zip); //5791

function sendEmail({ parents: { email } }) {
  console.log(`Sent an email to ${email}`);
}
sendEmail(student); //Sent an email to john-parents@abcde.com

//-------------------------
const getStudent = () => {
  return {
    name: "John Williamson",
    age: 9,
    std: 3,
    subjects: ["Maths", "English", "EVS"],
    parents: {
      father: "Brown Williamson",
      mother: "Sophia",
      email: "john-parents@abcde.com",
    },
    address: {
      street: "65/2, brooklyn road",
      city: "Carterton",
      country: "New Zealand",
      zip: 5791,
    },
  };
};

// const { name: anotherName, subjects: otherSubjects } = getStudent();
// console.log(anotherName, otherSubjects);

const students = [
  {
    name: "William",
    grade: "A",
  },
  {
    name: "Tom",
    grade: "A+",
  },
  {
    name: "Bob",
    grade: "B",
  },
];

for (let { name, grade } of students) {
  console.log(name + "'s grade is", grade);
  /**
    William A
    Tom A+
    Bob B
   */
}
