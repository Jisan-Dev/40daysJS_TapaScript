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

// 4. Build a Student Management System
// - Store student details in an object (name, age, grades).
// - Implement a method to calculate the average grade.

const studentManagementSystem = {
  name: "Hassan",
  age: 19,
  grades: {
    math: 90,
    physics: 80,
    english: 100,
  },
  calcAverage() {
    let sum = 0;
    const totalSubs = Object.entries(this.grades).length;
    console.log("sum:", sum, "totalSubs:", totalSubs);

    // for (let key in this.grades) {
    //   sum += this.grades[key];
    // }

    for (let [_, grade] of Object.entries(this.grades)) {
      sum += grade;
    }
    // both the above ways works

    console.log(`The average grade is ${sum / totalSubs}`);
  },
};

studentManagementSystem.calcAverage();

//______________________________________________________________
// 5- Book Store Inventory System
// - Store books in an object.
// - Add functionality to check availability and restock books.

const bookStoreInventory = {
  books: {
    book1: {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      quantity: 3,
    },

    book2: {
      title: "1984",
      author: "George Orwell",
      quantity: 1,
    },

    book3: {
      title: "The Alchemist",
      author: "Paulo Coelho",
      quantity: 10,
    },
  },

  checkAvailability(bookTitle) {
    for (let bookIdx in this.books) {
      if (bookTitle === this.books[bookIdx].title) {
        console.log(`This book '${bookTitle}' is available`);
        return;
      }
    }
    console.log(`This book '${bookTitle}' is not available`);
  },

  restockBooks(bookTitle, quantity) {
    for (let [_bookIdx, book] of Object.entries(this.books)) {
      if (bookTitle === book.title) {
        book.quantity += quantity;
        console.log(`'${bookTitle}' : was added another '${quantity}' books and the total available is '${book.quantity}'`);
        return;
      }
    }
    console.log(`'${bookTitle}' : is not valid! Enter a valid book title`);
  },
};

bookStoreInventory.checkAvailability("1984");
bookStoreInventory.restockBooks("1984", 20);

// 6. What is the difference between Object.keys() and Object.entries()? Explain with examples

/*
  SOLUTION :
    Object.keys : takes object and returns array which contains the object keys.
    Object.entries : it returns arrays which contain key and value of the object that is passed.
*/

// 7. How do you check if an object has a certain property?

/*
  SOLUTION :
    i can check using "in" operator which returns true or false. eg:  ("property" in object)
*/

// 8. What will be the output and why?

const personName = {
  name: "John",
};

const newPerson = personName;
newPerson.name = "Doe";
console.log(personName.name); // 'Doe'

/*
  SOLUTION : 
    the output will be name property set to 'Doe',thats because
    objects are reference type and we are pointing the newPersons's memory location to the personName's memory location that means if you copy it will share the same reference,
    so personName was copied to newPerson object that means they will be same. if you change 
    newPerson object the personName object will also be changed.
*/
