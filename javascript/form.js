let nameForm = document.getElementById("from_name").value;
const email = document.getElementById('email_id').value;
const message = document.getElementById('message').value;
const btn = document.getElementById('submitBtn');
const form = document.getElementById("contactMe");
const popup = document.getElementById('popUp');

function submitForm(event) {
    event.preventDefault();
};

form.addEventListener('submit', submitForm);

function SendMail() {
    var params = {
        from_name: document.getElementById("from_name").value,
        email_id: document.getElementById("email_id").value,
        message: document.getElementById("message").value,
    };
    
    emailjs.send("service_f8rj0nc", "template_7w1dbmr", params)
    .then(function (res) {
        popup.classList.toggle('trigger')
    }, function(error) {
        alert("Failed! " + res.status)
    });

    form.reset();
};

function closeCard() {
    popup.classList.toggle('trigger')
}