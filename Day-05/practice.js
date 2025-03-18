// for loop
// “A for loop is best when we know exactly how many times we need to run a block of code.”

/*
 for (initialization; condition; update) {
    // Code
 }
*/
for (let count = 1; count <= 5; count++) {
  console.log("Iteration/Loop", count);
}

// Addition of even numbers between 1 to 100
let sum = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    sum += i;
    // console.log(sum);
  }
}
console.log("Sum is", sum);

let language = "JavaScript";
for (let i = 0; i < language.length; i++) {
  // console.log(language[i]);
  console.log(language.charAt(i));
}

// Nested Loop
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log("Row", i, "Col", j);
  }
}

// Break and Continue
for (let i = 1; i <= 3; i++) {
  if (i === 3) break;
  console.log(i);
}

console.log("-----------------");

for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i);
}

// Multiple counters or a single loop
for (let i = 1, j = 10; i <= 10 && j >= 1; i++, j--) {
  console.log("ascending", i, "descending", j);
}

// While Loop
// “A while loop runs as long as a given condition is true. It’s best when we don’t know in advance how many iterations are needed.”
/*
 while(condition) {
    // Code
 }
*/
let counter = 1;
while (counter <= 5) {
  console.log(counter);
  counter++;
}
