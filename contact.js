const form = document.getElementById("contactForm");
const successDiv = document.querySelector(
  '[data-testid="test-contact-success"]'
);

const handleSubmit = (event)=>{
  event.preventDefault();

  // Reset errors
  document.querySelectorAll(".error").forEach((el) => (el.textContent = ""));

  //   Possibly useless code
  document
    .querySelectorAll("input, textarea")
    .forEach((el) => el.classList.remove("invalid"));
  //

  successDiv.style.display = "none";

  const fields = {
    name: document.getElementById("fullName").value.trim(),
    email: document.getElementById("email").value.trim(),
    subject: document.getElementById("subject").value.trim(),
    message: document.getElementById("message").value.trim(),
  };

  let isValid = true;

  // Validate full name
  if (!fields.name) {
    showError("name", "Full name is required");
    isValid = false;
  }

  // Validate email
  if (!fields.email) {
    showError("email", "Email is required");
    isValid = false;
  } else if (!isValidEmail(fields.email)) {
    showError("email", "Please enter a valid email");
    isValid = false;
  }

  // Validate subject
  if (!fields.subject) {
    showError("subject", "Subject is required");
    isValid = false;
  }

  // Validate message
  if (!fields.message) {
    showError("message", "Message is required");
    isValid = false;
  }

  if (isValid) {
    successDiv.textContent =
      "Thank you! Your message has been sent successfully.";
    successDiv.style.display = "block";
    form.reset();
  }
};

function showError(fieldName, message) {
  const errorEl = document.querySelector(
    `[data-testid="test-contact-error-${fieldName}"]`
  );
  const inputEl = document.getElementById(
    fieldName === "name" ? "fullName" : fieldName
  );
  errorEl.textContent = message;
  inputEl.classList.add("invalid");
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
