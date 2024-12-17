// Retrieve the input element outside the function
const emailInput = document.querySelector(".footer__form__input");
const form = document.querySelector(".footer__form");
const errorMessage = document.createElement("p"); // Create error message element
errorMessage.style.color = "red";
emailInput.insertAdjacentElement("afterend", errorMessage);
errorMessage.style.gridColumn = "1 / 3";
errorMessage.style.gridRow = "2 / 3";
errorMessage.style.fontSize = "0.65rem";
errorMessage.style.display = "none";

function validateEmail(email) {
  // Regular expression for email validation
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return emailRegex.test(email);
}

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission

  const email = emailInput.value;

  if (validateEmail(email)) {
    alert("Thank you for subscribing!");
    location.reload(); // Reload the page
  } else {
    errorMessage.textContent = "Please enter a valid email address.";
    errorMessage.style.display = "block";
  }
});
