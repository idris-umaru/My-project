document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registerForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get form values
    const firstName = document.getElementById("firstName").value.trim();
    const middleName = document.getElementById("middleName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const dob = document.getElementById("dob").value;
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Basic validation
    if (!firstName || !lastName || !dob || !email || !password || !confirmPassword) {
      alert("Please fill out all required fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // OPTIONAL: Display form data (for testing)
    console.log("Registration Details:");
    console.log({
      firstName,
      middleName,
      lastName,
      dob,
      email,
      password
    });

    // Placeholder: Save to backend or Firebase here
    alert("Registration successful!");

    // Reset form
    form.reset();
  });
});