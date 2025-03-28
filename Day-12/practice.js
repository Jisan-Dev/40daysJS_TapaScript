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
