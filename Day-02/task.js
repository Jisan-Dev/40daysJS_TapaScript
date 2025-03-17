let name = "Alex";
let age = 23;
let isStudent = true;
const favProgrammingLanguage = "JavaScript";

console.log(name, age, isStudent, favProgrammingLanguage);

age = 24; //no error
console.log(age);

// favProgrammingLanguage = "Php"; //error: Assignment to constant variable.
// console.log(favProgrammingLanguage);

const obj = {
  name: "Alex",
  age: 23,
  isStudent: true,
  favProgrammingLanguage: "JavaScript",
};

console.log(obj);

const arr = [obj];
console.log(arr);

arr.push({ name: "Bishop" });
console.log(arr);

obj.roll = 12;
console.log(obj);

delete obj.isStudent;
console.log(obj);
