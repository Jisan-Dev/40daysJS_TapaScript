// 1.  Generate a Pyramid Pattern using Nested Loop as it is shown below:
// ```
// *
// * *
// * * *
// * * * *
// * * * * *
// ```;
for (let i = 0; i < 5; i++) {
  let star = "";
  for (let row = 0; row <= i; row++) {
    star += "* ";
  }
  console.log(star);
}

// 2. Create Multiplication Table (Using for loop)
let N = 3;
for (let i = 1; i <= 10; i++) {
  const result = N * i;
  console.log(`${N} X ${i} = ${result}`);
}

//3. Find the summation of all odd numbers between 1 to 500 and print them on teh console log.
let sum = 0;
for (let i = 1; i <= 500; i++) {
  if (i % 2 !== 0) {
    sum += i;
  }
}
console.log(sum);

//4. Skipping Multiples of 3
// Write a program to print numbers from 1 to 20, but skip multiples of 3.
for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0) {
    continue;
  }
  console.log(i);
}
