document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (email && password) {
    console.log("Logging in with:", email);
    // Here you'd integrate Firebase Auth or your backend API
    alert("Login successful to campus health!");
    window.location.href = "dashboard.html";
  } else {
    alert("Please fill in both fields.");
  }
});