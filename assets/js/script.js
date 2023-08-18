function sendEmail() {
  var name = document.getElementById("name").value;
  var sub = document.getElementById("subject").value;
  var messages = document.getElementById("message").value;
  var email = document.getElementById("email").value;
  var body =
    "Name: " + name + "<br/> Email: " + email + "<br/> Body: " + messages;
  if (name === "" || email === "" || sub === "" || messages === "") {
    return false; // Prevent form submission
  }

  var toasts = document.querySelectorAll(".toast");
  var closeIcons = document.querySelectorAll(".close");
  var progressBars = document.querySelectorAll(".progress");
  var text1, text2, borderColor;
  var toastElement = document.querySelector(".toast");
  var checkElement = document.querySelector(".toast-content .check");
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "cwangdi2003@gmail.com",
    Password: "2D094FF0BAADE7304619EA7A068FB31B8F56",
    To: "12220027.gcit@rub.edu.bt",
    From: "cwangdi2003@gmail.com",
    Subject: sub,
    Body: body,
  }).then(function (message) {
    console.log(message);
    if (message === "OK") {
      text1 = "Message sent successfully";
      text2 = "Your message has been delivered.";
      // Green color for success
    } else {
      text1 = "Message not sent";
      text2 = "An error occurred while sending the message.";
      borderColor = "red"; // Red color for error
      toastElement.classList.add("custom-background");
      checkElement.style.backgroundColor = "#FF0000";
    }

    toasts.forEach(function (toast) {
      toast.querySelector(".text-1").textContent = text1;
      toast.querySelector(".text-2").textContent = text2;
      toast.style.borderLeftColor = borderColor; // Set the border color

      toast.classList.add("active");
    });

    progressBars.forEach(function (progress) {
      progress.classList.add("active");
    });

    var timer1 = setTimeout(function () {
      toasts.forEach(function (toast) {
        toast.classList.remove("active");
      });
      clearTimeout(timer1);
    }, 5000);

    var timer2 = setTimeout(function () {
      progressBars.forEach(function (progress) {
        progress.classList.remove("active");
      });
      clearTimeout(timer2);
    }, 5000);

    closeIcons.forEach(function (closeIcon) {
      closeIcon.addEventListener("click", function () {
        toasts.forEach(function (toast) {
          toast.classList.remove("active");
        });
        setTimeout(function () {
          progressBars.forEach(function (progress) {
            progress.classList.remove("active");
          });
        }, 5000);
        clearTimeout(timer1);
        clearTimeout(timer2);
      });
    });

    // Reset the form
    document.getElementById("name").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("message").value = "";
    document.getElementById("email").value = "";
  });
}