/*

accounts*/

const accounts = [
  { name: "John Mbugu", pin: "2345", account_number: 34345, amount: 0 },
  { name: "Samson Mwangi", pin: "9993", account_number: 12345, amount: 0 },
];

/*
 function for creating an account
 1.prompt for name
 2.prompt for pin
 3.Generate an accountNumber
4.set an amount of 0
*/

//check if somebody has the account
//use for or while loop to
//transverse array checking each
//account
function createAccount() {
  const name = prompt("Enter your name");
  const pin = prompt("Enter 4 digit pin");
  const account_number = prompt("Enter account number ");

  const account = {
    name: name,
    pin: pin,
    account_number: account_number,
    amount: 0,
  };

  for (let i = 0; i < accounts.length; i++) {
    console.log("i is ", i);
    let singleAccount = accounts[i];
    if (singleAccount.account_number == account_number) {
      alert(`Account number ${account_number} exists`);
      return;
    }
  }
}
