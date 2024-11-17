document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();
  
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
  
    if (firstName && lastName && email) {
      const mailtoLink = `mailto:solutionsbyraqami@gmail.com?subject=Contact Form Submission&body=First Name: ${firstName}%0D%0ALast Name: ${lastName}%0D%0AEmail: ${email}`;
      window.location.href = mailtoLink;
    } else {
      alert("Please fill in all fields.");
    }
  });
  