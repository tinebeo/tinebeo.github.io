window.onload = function(){
    document.querySelector('#submit').onclick = validateForm; //validate the form when clicking the button
}

let form_content = document.getElementById("form");
form_content.style.display = "none";
   
function displayBlock() {
    form_content.style.display = "block";
}

/*form validation for name, email and the checkbox */
function validateForm() {   
    document.getElementById("name").nextElementSibling.innerHTML = ""; // reseting the error message for invalid name
    document.getElementById("email").nextElementSibling.innerHTML = ""; // reseting the error message for invalid email
    document.getElementById("mySpan").innerHTML = ""; // reseting the error message for checkbox
    let isValid = true;
    let name_str = document.getElementById("name").value;
    let namePattern = /^[a-zA-Z\s]{2,50}$/;
    let email_str = document.getElementById("email").value;
    let emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
    
    if(name_str == "" || !namePattern.test(name_str))
    {
        document.getElementById("name").nextElementSibling.innerHTML = "Please enter a valid name";
        isValid = false;
    }
    if(email_str == "" || !emailPattern.test(email_str)) {
        document.getElementById("email").nextElementSibling.innerHTML = "Please enter a valid email address";
        isValid = false;
    }
    if(!(document.getElementById("taxi").checked || document.getElementById("metro").checked || document.getElementById("other").checked)) {
        document.getElementById("mySpan").innerHTML = "Please select something";
        isValid = false;
    }
    if(isValid) {
        form_content.style.display = "none";    
        alert("Thank you for the Survey");    
    }
    return isValid;
}