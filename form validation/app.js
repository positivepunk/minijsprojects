var fname = document.getElementById("name-error");
var phone = document.getElementById("phone-error");
var email = document.getElementById("email-error");
var message = document.getElementById("message-error");
var sub = document.getElementById("submit-error");
var messageman = document.getElementById("contact-Message");
required = 30;

function validateName() {
    var name = document.getElementById("contact-name").value;
    if (name.length == 0) {
        fname.innerHTML = "name is required"
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]+/)) {
        fname.innerHTML = "full name is required";
        return false;
    }
    fname.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validatePhone() {
    var name = document.getElementById("contact-phone").value;
    if (name.length == 0) {
        phone.innerHTML = "phoneNo is required"
        return false;
    }
    if (name.length != 10) {
        phone.innerHTML = "phoneNo should be 10 digits"
        return false;
    }
    if (!name.match(/^[0-9]{10}$/)) {
        phone.innerHTML = "digits Only";
        return false;
    }
    phone.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}


function validateEmail() {
    var name = document.getElementById("contact-Email").value;
    if (name.length == 0) {
        email.innerHTML = "Email is required"
        return false;
    }
    if (!name.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        email.innerHTML = "Invalid Email";
        return false;
    }
    email.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateMessage() {
    var name = document.getElementById("contact-Message");

    var left = required - name.value.length;



    if (left > 0) {
        message.innerHTML = `${left} letters left`;

        return false;
    }

    message.innerHTML = '<i class="fa-solid fa-circle-check"></i>';

    return true;
}

messageman.addEventListener("keydown", function (event) {

    if (messageman.value.length >= required && event.key !== 'Backspace') {
        event.preventDefault();
    }
}
);

function validateForm(){
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
        sub.style.display="block";
        sub.innerHTML="fill the details correctly to submit";
        setTimeout(()=>{
            sub.style.display="none";
        },3000)
        return false;
    }
}