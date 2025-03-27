// Usefulness of Closure

// 1. You can keep the variables private without exposing them.
// 2. You can stop variable pollution.
// 3. You can create a function factory.
// 4. You can keep a variable alive between multiple calls.

function createBankAccount(initialAmount) {
  let balance = initialAmount;

  return {
    deposit: (amount) => {
      balance += amount;
      console.log("Deposited ", amount, " Current Balance ", balance);
    },

    withdraw: (amount) => {
      if (amount > balance) {
        console.log("Insufficient Fund");
      } else {
        balance -= amount;
        console.log("Withdrawn ", amount, " Current Balance ", balance);
      }
    },

    checkBalance: () => console.log("Current Balance", balance),
  };
}

const jisanBankAccount = createBankAccount(100);
// console.log(jisanBankAccount);

jisanBankAccount.deposit(300); //Deposited  300  Current Balance  400
jisanBankAccount.withdraw(800); //insufficient balance
jisanBankAccount.withdraw(100); //Withdrawn  100  Current Balance  300
jisanBankAccount.withdraw(100); // Withdrawn  100  Current Balance  200
jisanBankAccount.checkBalance(); //Current Balance 200

//------------------memoryHeavy as it has to remember the whole array
function dealingWithBigData() {
  let bigData = new Array(10000000).fill("*");

  return function () {
    console.log(bigData[3]);
  };
}

const variable12 = dealingWithBigData();

console.log(variable12());
