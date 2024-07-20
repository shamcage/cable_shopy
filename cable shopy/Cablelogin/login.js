const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const rememberMeCheckbox = document.getElementById("remember-me");
const errorMessageElement = document.getElementById("error-message");
const loginForm = document.getElementById("login-form");

const togglePassword = document.querySelector(".toggle-password");
const passwordEyeIcon = togglePassword.querySelector("i");

// Toggle password visibility on click
togglePassword.addEventListener("click", () => {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    passwordEyeIcon.classList.remove("fa-eye-slash");
    passwordEyeIcon.classList.add("fa-eye");
  } else {
    passwordInput.type = "password";
    passwordEyeIcon.classList.remove("fa-eye");
    passwordEyeIcon.classList.add("fa-eye-slash");
  }
});

// Validate form on submit
loginForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent default form submission

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  // Basic validation (replace with your actual authentication logic)
  if (username === "" || password === "") {
    errorMessageElement.textContent = "Please enter username and password.";
    return;
  }

  // Simulate a login request (replace with your API call)
  fetch("/api/login", {
    method: "POST",
    body: JSON.stringify({ username, password }),
  })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        // Login successful
        // Handle successful login (redirect, etc.)
        window.location.href = "success.html"; // Redirect to success page (replace with your logic)
      } else {
        errorMessageElement.textContent = data.message || "Login failed.";
      }
    })
    .catch(error => {
      errorMessageElement.textContent = "An error occurred. Please try again.";
      console.error(error);
    });
});
