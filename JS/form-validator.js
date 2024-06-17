function validate(e) {
    //alert("Connected")
    let name = document.querySelector('#name').value;
    let country = document.querySelector('#country').value;
    let mobile = document.querySelector('#mobile').value;
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;
    let password2 = document.querySelector('#password2').value;

    let gender = document.querySelector("input[name='gender']:checked");

    let error = false;

    if (name === "" || name === null) {
        document.querySelector("#nameError").innerHTML = "Please enter your name";
        document.querySelector("#name").style.border = "1px solid red";
        error = true;
    } else {
        document.querySelector("#nameError").innerHTML = "";
        document.querySelector("#name").style.border = "1px solid black";
    }

    if (!gender) {
        document.querySelector("#genderError").innerHTML = "Please select your gender";
        error = true;
    } else {
        document.querySelector("#genderError").innerHTML = "";
    }

    if (country === "" || country === null) {
        document.querySelector("#countryError").innerHTML = "Please enter your country";
        document.querySelector("#country").style.border = "1px solid red";
        error = true;
    } else {
        document.querySelector("#countryError").innerHTML = "";
        document.querySelector("#country").style.border = "1px solid black";
    }

    if (mobile === "" || mobile === null) {
        document.querySelector("#mobileError").innerHTML = "Please enter your mobile number";
        error = true;
    } else if (mobile.length != 10 || isNaN(mobile)) {
        document.querySelector("#mobileError").innerHTML = "Please enter a valid mobile number";
        error = true;
    } else {
        document.querySelector("#mobileError").innerHTML = "";
    }

    let emailPattern = /^[a-z]+[a-z0-9\._]{3,}@[a-z]{3,10}\.[a-z\.]{2,8}$/;

    if (email === "" || email === null) {
        document.querySelector("#emailError").innerHTML = "Please enter your email";
        error = true;
    } else if (!email.match(emailPattern)) {
        document.querySelector("#emailError").innerHTML = "Please enter a valid email";
        error = true;
    } else {
        document.querySelector("#emailError").innerHTML = "";
    }
    if (dob === "" || dob === null) {
        document.querySelector('#dobError').innerHTML = "Date of Birth is required";
        document.querySelector("#dobError").style.border = "1px solid red";
        error = true;
    }


    let validPassword = true;
    let passError = "";
    if (!password.match(/[a-z]/)) {
        passError += "<br>Password should contain at least one lowercase character";
        validPassword = false;
    }
    if (!password.match(/[A-Z]/)) {
        passError += "<br>Password should contain at least one uppercase character";
        validPassword = false;
    }
    if (!password.match(/[0-9]/)) {
        passError += "<br>Password should contain at least one number ";
        validPassword = false;
    }
    if (!password.match(/[!@#$%^&*_]/)) {
        passError += "<br>Password should contain at least one special character";
        validPassword = false;
    }
    if (password.length < 8 || password.length > 16) {
        passError += "<br>Password must be 8-16 characters long";
        validPassword = false;
    }
    if (!validPassword) {
        document.querySelector("#passwordError").innerHTML = passError;
        error = true;
    } else {
        document.querySelector("#passwordError").innerHTML = "";
    }

    if (password2 === "" || password2 === null) {
        document.querySelector("#password2Error").innerHTML = "Confirm password is required";
        error = true;
    } else if (password !== password2) {
        document.querySelector("#password2Error").innerHTML = "Password and Confirm password must be the same";
        error = true;
    } else {
        document.querySelector("#password2Error").innerHTML = "";
    }

    if (error) {
        e.preventDefault();
    }
}
