document.getElementById("appointmentForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("fullname").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const doctor = document.getElementById("doctor").value;

  if (name && date && time && doctor) {
    alert(`Appointment booked for ${name} with ${doctor} on ${date} at ${time}.`);
    this.reset();
  } else {
    alert("Please fill in all fields.");
  }
});

document.getElementById("logoutBtn").addEventListener("click", function (e) {
  e.preventDefault();
  alert("Logged out successfully!");
  window.location.href = "login.html";
});