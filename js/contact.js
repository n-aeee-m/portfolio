function sendMail(event) {
  event.preventDefault(); // Prevent form submission

  var name = document.getElementById('InputName').value.trim();
  var email = document.getElementById('InputEmail').value.trim();
  var message = document.getElementById('InputMessage').value.trim();

  // Check if any field is empty
  if (name === '' || email === '' || message === '') {
      // Display an alert message
      alert('Please fill out all fields.');
      return; // Exit function if any field is empty
  }

  const serviceID = 'service_mxv9fwa'; // Replace with your actual service ID
  const templateID = 'template_8lm2uvk'; // Replace with your actual template ID
  var params = {
      name: name,
      email: email,
      message: message
  };

  // Sending email using emailjs library
  emailjs.send(serviceID, templateID, params)
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        // Clear form fields after successful submission
        document.getElementById('InputName').value = '';
        document.getElementById('InputEmail').value = '';
        document.getElementById('InputMessage').value = '';
        // Display success alert
        alert('Your message sent successfully!');
    }, function(error) {
        console.log('FAILED...', error);
        // Handle errors here
        alert('Failed to send message. Please try again later.');
    });
}
