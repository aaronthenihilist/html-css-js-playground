// targeting calculation button element for later event listener
let calcBtn = document.querySelector("#calc-btn");

// initiate event listener for calculation button
calcBtn.addEventListener("click", function (e) {
  // check for empty input fields
  if (
    document.querySelector("#bill").value == "" ||
    document.querySelector("#tip").value == ""
  ) {
    // if empty, alert user to enter values
    alert("Please enter both a bill & tip amount");
    return;
  } else {
    // run calculation if both fields are filled
    let billInput = document.querySelector("#bill");
    let bill = billInput.value;

    let billValue = document.querySelector("#bill-value");
    billValue.innerHTML = "$" + bill;

    let tipInput = document.querySelector("#tip");
    let tip = tipInput.value;
    let tipValue = document.querySelector("#tip-value");
    // attempted to remove decimal point from tip value for display purposes
    // need to add in functionality to recognize if user enters .5 it will output to html as "50%" instead of "5%"
    tipValue.innerHTML = tip.replace(".", "") * 1 + "%";

    let totalTip = bill * tip;

    let totalBill = Number(bill) + Number(totalTip);
    let totalBillValue = document.querySelector("#total-value");
    totalBillValue.innerHTML = "$" + totalBill;

    let billCalcForm = document.querySelector("#bill-calc-form");
    billCalcForm.style.display = "none";

    // create receipt element
    let receipt = document.querySelector("#receipt");
    receipt.style.display = "block";

    let successMsg = document.querySelector(".success-msg");
    successMsg.style.display = "block";

    e.preventDefault();
  }
});
