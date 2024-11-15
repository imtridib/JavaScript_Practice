/** @format */

document
  .getElementById("btn-cash-out")
  .addEventListener("click", function (event) {
    event.preventDefault();
    console.log("cash out button clicked");

    const cashOut = getInputFieldValueById("input-cash-out");
    const pinNumber = getInputFieldValueById("input-cash-out-pin");

    if (isNaN(cashOut)) {
      alert("Failed to cash out");
      return;
    }

    // const cashOut = document.getElementById("input-cash-out").value;
    // const cashOutNumber = parseFloat(cashOut);
    // const pinNumber = document.getElementById("input-cash-out-pin").value;

    if (pinNumber === 1234) {
      const balance = getTextFieldValueById("account-balance");
      // const balance = document.getElementById("account-balance").innerText;
      // const balanceNumber = parseFloat(balance);

      // check whether amount is enough to cash out
      if (cashOut > balance) {
        alert("You do not have enough money to cash out");
        return;
      }

      const newBalance = balance - cashOut;

      //update the ui
      document.getElementById("account-balance").innerText = newBalance;

      // add to transaction history
      const div = document.createElement("div");
      div.classList.add("bg-yellow-300");
      div.innerHTML = `
      <h4 class='text-2xl font-bold'>Cash Out</h4>
      <p>${cashOut} withdraw. New Balance ${newBalance}</p>`;

      document.getElementById("transaction-container").appendChild(div);
    } else {
      alert("Failed to cash out. Please try again later.");
    }
  });
