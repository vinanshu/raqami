document.getElementById("collaborationForm").addEventListener("submit", function (event) {
    event.preventDefault();
  
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
  
    if (email && message) {
      alert(`Thank you for your message!\nEmail: ${email}\nMessage: ${message}`);
      // Reset the form
      this.reset();
    } else {
      alert("Please fill in all fields.");
    }
  });
  