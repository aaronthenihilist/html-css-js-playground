// first name form field
let firstNameForm = document.querySelector("#firstNameForm");

// first name submit button
let submitFirstNameBtn = document.querySelector("#submitFirstNameBtn");

// first name input field
let firstNameInput = document.querySelector("#firstNameInput");

// first name output to html
let firstNameOutput = document.querySelector("#firstNameOutput");

// first name form results div
let firstNameFormResults = document.querySelector("#firstNameFormResults");

// first name error message
let firstNameErrorMsg = document.querySelector("#firstNameErrorMsg");

// click event for first name submit button
submitFirstNameBtn.addEventListener("click", (e) => {
  // check for empty input field
  if (firstNameInput.value === "") {
    // throw error message for empty input field
    firstNameErrorMsg.style.display = "block";
  } else {
    // input field passes empty input field check; execute code below
    firstNameOutput.innerHTML = firstNameInput.value;
    firstNameForm.style.display = "none";
    firstNameFormResults.style.display = "flex";
    firstNameErrorMsg.style.display = "none";
  }

  e.preventDefault();
});

// first name edit button
let firstNameEditBtn = document.querySelector("#firstNameEditBtn");

// click event for first name edit button
firstNameEditBtn.addEventListener("click", (e) => {
  // show input field to edit/update input field value
  firstNameForm.style.display = "block";
  // hide input field results until edits are saved again
  firstNameFormResults.style.display = "none";

  e.preventDefault();
});
