const form = document.getElementById("contactForm");
const successDiv = document.querySelector(
  '[data-testid="test-contact-success"]'
);

form.addEventListener("submit", (e) => handleSubmit(e));

const handleSubmit = (event) => {
  event.preventDefault();

  // Reset errors
  document.querySelectorAll(".error").forEach((el) => (el.textContent = ""));

  successDiv.style.display = "none";

  const fieldsValidity = {
    name: {
      element: document.getElementById("name"),
      isValid: document.getElementById("name").validity.valid,
    },
    email: {
      element: document.getElementById("email"),
      isValid: document.getElementById("email").validity.valid,
    },
    subject: {
      element: document.getElementById("subject"),
      isValid: document.getElementById("subject").validity.valid,
    },
    message: {
      element: document.getElementById("message"),
      isValid: document.getElementById("message").validity.valid,
    },
  };

  // Validate full name
  checkError("name", "Full name");

  // Validate email
  checkError("email", "Email");

  // Validate subject
  checkError("subject", "Subject");

  // Validate message
  checkError("message", "Message");

  //   if everything is valid
  if (
    fieldsValidity.name.isValid &&
    fieldsValidity.email.isValid &&
    fieldsValidity.subject.isValid &&
    fieldsValidity.message.isValid
  ) {
    successDiv.textContent =
      "Thank you! Your message has been sent successfully.";
    successDiv.style.display = "block";
    form.reset();
  }
};

function checkError(fieldName, message) {
  isFakeValid = false;
  //   collect the specific field error span
  const errorEl = document.querySelector(
    `[data-testid="test-contact-error-${fieldName}"]`
  );

  //   collect the specific field
  const inputEl = document.getElementById(fieldName);

  if (inputEl.validity.valueMissing || inputEl.value.trim() === "") {
    inputEl.validity.valid = false;
    errorEl.textContent = `${message} is required`;
  } else if (
    inputEl.validity.typeMismatch ||
    inputEl.validity.patternMismatch
  ) {
    if (fieldName === "email") {
      errorEl.textContent = `please enter a valid ${fieldName} (name@example.com).`;
    } else {
      errorEl.textContent = `please enter a valid ${fieldName} (text only)`;
    }
  } else if (inputEl.validity.tooShort) {
    errorEl.textContent = `${message} must be at least 10 characters long`;
  }
}
