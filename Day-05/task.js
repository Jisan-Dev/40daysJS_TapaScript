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

// 5. Write a program to reverse the digits of a given number using a while loop.
/*
Example:
Input: 6789
Output: 9876
*/
let input = 6789;
let reversed = 0;

while (input > 0) {
  let digit = input % 10; // get the last digit.modulo 10 (%10) gives us the last digit of a decimal number

  reversed = reversed * 10 + digit; // append the digit to the reversed number. Multiplying reversed with 10 so that it always keep a placeholder at the right side (0) and then when adding it with the extracted number, the extracted number will take the place of 0 (eg. 9'0' => 9'8'...)

  input = Math.floor(input / 10); // removing the last digit from the input with Math.floor so that we get to the point when input will be 0 and the loop will be finished.
}
console.log(reversed);

//TODO: Task no.6 : Write your understanding on the differences between for, while, and do-while loop. Create their flow charts.
