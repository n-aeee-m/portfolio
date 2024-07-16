function sendMail(event) {
    event.preventDefault();

    var params = {
      name: document.getElementById("InputName").value,
      email: document.getElementById("InputEmail").value,
      message: document.getElementById("InputMessage").value,
    };
    const serviceID = "service_mxv9fwa";
    const templateID = "template_8lm2uvk";

    emailjs.send(serviceID, templateID, params)
      .then(res => {
          document.getElementById("InputName").value = "";
          document.getElementById("InputEmail").value = "";
          document.getElementById("InputMessage").value = "";
          console.log(res);
          alert("Your message sent successfully!!");
      })
      .catch(err => console.log(err));
}
