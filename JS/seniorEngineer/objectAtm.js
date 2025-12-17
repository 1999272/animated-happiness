/*
Create a small part of
a digital atm application
to enable one
to.
1.Deposit
2.Withdrwal 
3.See his/her balancce
 including last transaction
  -date of transaction
  -prevBalance
  -type:
  -amount

  ->function storeLastTransction(){
  }

have 3 buttons
1 for each thing
eg one to withdrawl

->one should be able to see 
his/her last transaction
-> with timestamp
*/

/*
Objective
1.Create an atm object.
Property: 1:console.log
  amount: <initial> 1000
  owner:<any name>

*/

/*
 Create a function to handle the deposit
 task->
 ->propmt user for an amount
 -> do typesafety->Must be a number
 ->check for negatives
 ->calculate the new amount
 -> Update the object
Create your function then call 
it to test it out.
*/

/*
create a function
Do withdrwal
- propmt for amount to withdraw
-do typesafty to ensure its a number
-check or convert to positive
-check if he/she has enough amount to witdraw
-update the amount
*/

const atm = {
  amount: 1000,
  owner: "Samson Mwangi",
};

function deposit() {
  console.log("bofore deposit");
  console.log(atm);
  let amountToDeposit = prompt("Enter Amount To Deposit:");
  //if amountToDeoposit is not a number
  //true
  if (isNaN(amountToDeposit)) {
    alert("Enter a valid number to depost");
    return;
  }
  //conversion
  let numberAmount = Number(amountToDeposit);
  //check for negatives
  if (numberAmount <= 0) {
    alert("To deposit enter amount greater than 1");
    return;
  }
  //access or read previous amount=>atm.amount
  storeLastTransction(numberAmount, "deposit", atm.amount);
  let newAmount = atm.amount + numberAmount;
  //Update the property
  atm.amount = newAmount;
  //
  console.log("after");
  console.log(atm);
}

function withdraw() {
  console.log("before");
  console.log(atm);
  let amountToWithdraw = prompt("Enter Amount To Withdraw:");
  if (isNaN(amountToWithdraw)) {
    alert("Enter a valid number to withdraw");
    return;
  }
  amountToWithdraw = Number(amountToWithdraw);
  if (amountToWithdraw === 0) {
    alert("Minimum withdrwal amount is 1 ksh");
    return;
  }
  if (amountToWithdraw < 0) {
    amountToWithdraw = amountToWithdraw * -1;
  }

  if (atm.amount < amountToWithdraw) {
    alert("Insufficient Balance in your account");
    return;
  }

  storeLastTransction(amountToWithdraw, "withdraw", atm.amount);

  let newAmount = atm.amount - amountToWithdraw;

  atm.amount = newAmount;
  alert(`Witdrawal success ${amountToWithdraw}`);
  console.log("after");
  console.log(atm);
}

function storeLastTransction(amount, type, prevBalance) {
  let date = new Date();
  let transaction = {
    amount: amount,
    type: type,
    prevBalance: prevBalance,
    timeStamp: date.toISOString(),
  };

  //write update
  atm.lastTransaction = transaction;
}

function showBalance() {
  if (atm.lastTransaction) {
    alert(`Hi, ${atm.owner}.
        Balance ${atm.amount}
        Last Transaction ${atm.lastTransaction.type}
        Date ${atm.lastTransaction.timeStamp}
        prevBalance ${atm.lastTransaction.prevBalance}
        amount Transacted ${atm.lastTransaction.amount}
        `);
  } else {
    alert(`Hi, ${atm.owner}.
        Balance ${atm.amount}`);
  }
}

// deposit();

// console.log(atm);
