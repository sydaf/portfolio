function SendMail() {
    var params = {
        from_name: document.getElementById("from_name").value,
        email_id: document.getElementById("email_id").value,
        message: document.getElementById("message").value,
    };
    emailjs.send("service_f8rj0nc", "template_7w1dbmr", params)
    .then(function (res) {
        alert("Success! " + res.status);
    }, function(error) {
        alert("Failed! " + res.status)
    });
}

const form = document.getElementById("contactMe");
function submitForm(event) {
    event.preventDefault();
}

form.addEventListener('submit', submitForm)