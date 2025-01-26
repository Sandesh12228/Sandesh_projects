..
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent page refresh
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
  
    console.log('Form submitted:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Subject:', subject);
    console.log('Message:', message);
  
    alert('Thank you for contacting us!');
  });