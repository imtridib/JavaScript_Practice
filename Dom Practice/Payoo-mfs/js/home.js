/** @format */

// add money to the account
/* 
1. add event listener to the add Money button ( form submit )
   make sure to preventDefault so that page doesn't reloads
2. get the money user wants to add
   also, get the pin number provided
3. verify the pin number. for , wrong pin number ==> failed to add
   for right pin number, allow to add the number to the account balance
4. get the current balance 
5. add money to be added with the current balance
6. display/update the balance in the DOM/UI
*/

// step-1: add an event handler to the add money button inside the form
document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const addMoney = getInputFieldValueById("input-add-money");
    const pinNumberInput = getInputFieldValueById("input-pin-number");

    // Validation of inputs
    if (isNaN(addMoney)) {
      alert("Failed to add money");
      money;
    }

    // step-2: get money to be added to the account
    // const addMoneyInput = document.getElementById("input-add-money").value;
    // // get the pin number provided
    // const pinNumberInput = document.getElementById("input-pin-number").value;

    //step-3: verify pin number
    if (pinNumberInput === 1234) {
      console.log("adding money to your account");
      //step-4: get the current balance
      const balance = getTextFieldValueById("account-balance");
      //const balance = document.getElementById("account-balance").innerText;
      console.log(balance);
      //step-5: add addMoneyInput with balance
      const newBalance = balance + addMoney;
      //step-6 update the balance in the UI/DOM
      document.getElementById("account-balance").innerText = newBalance;

      const p = document.createElement("p");
      p.innerText = `Added: ${addMoney} Tk. New Balance: ${newBalance}`;

      // should be a common function
      document.getElementById("transaction-container").appendChild(p);
    } else {
      alert("Failed to add money! Please try again.");
    }
  });
