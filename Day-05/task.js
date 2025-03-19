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
