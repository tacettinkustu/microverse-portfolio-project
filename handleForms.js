const form = document.querySelector(".form-list");
const email = form.elements[1];

function error(input, message) {
  const error = input.previousElementSibling;
  error.innerText = message;
  return false;
}

function success(input) {
  const error = input.previousElementSibling;
  error.innerText = "";
  return true;
}

function requireValue(input, message) {
  return input.value.trim() === "" ? error(input, message) : success(input);
}

function validateEmail(input) {
  const re = /^[a-z]+@[a-z0-9-]+\.[a-z0-9-.]+$/;

  return re.test(input.value.trim())
    ? success(input)
    : error(input, "Invalid email format");
}

form.addEventListener("submit", (event) => {
  // check required fields
  let valid = true;
  valid = requireValue(email, "Email is required");
  if (valid) {
    valid = validateEmail(email);
  }
  if (!valid) {
    event.preventDefault();
  }
});
