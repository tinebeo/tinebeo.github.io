/* ------------------------------------ Click on login and Sign Up to  changue and view the effect
---------------------------------------
*/
function validate() {
  var letters = /^[A-Za-z]+$/;

  let user = document.getElementById("user");
  let pass = document.getElementById("pass");
  if (user.value == "" && pass.value == "") {
    alert("Please fill the empty Field");
  } else if (!user.value.match(letters)) {
    alert("not matching ");
  } else {
    window.location.replace("Hotel.html");
  }




}

function validate2() {
  var letters = /^[A-Za-z]+$/;
  // alert("as");
  let email = document.getElementById("email");
  let user2 = document.getElementById("user2");
  let pass2 = document.getElementById("pass2");
  let cpass = document.getElementById("cpass");

  if (user2.value == "" && email.value == "" && pass2.value == "" && cpass.value == "") {
    alert("Please fill the empty Field");
  } else if (!user2.value.match(letters)) {
    alert("not matching ");
  } else if (pass2.value != cpass.value) {
    alert("Please Fill the Macthing Password")
  } else {
    window.location.replace("Hotelss.html");
  }




}

function cambiar_login() {


  document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_login";
  document.querySelector('.cont_form_login').style.display = "block";
  document.querySelector('.cont_form_sign_up').style.opacity = "0";

  setTimeout(function () {
    document.querySelector('.cont_form_login').style.opacity = "1";
  }, 400);

  setTimeout(function () {
    document.querySelector('.cont_form_sign_up').style.display = "none";
  }, 200);
}

function cambiar_sign_up(at) {
  document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_sign_up";
  document.querySelector('.cont_form_sign_up').style.display = "block";
  document.querySelector('.cont_form_login').style.opacity = "0";

  setTimeout(function () {
    document.querySelector('.cont_form_sign_up').style.opacity = "1";
  }, 100);

  setTimeout(function () {
    document.querySelector('.cont_form_login').style.display = "none";
  }, 400);


}



function ocultar_login_sign_up() {

  document.querySelector('.cont_forms').className = "cont_forms";
  document.querySelector('.cont_form_sign_up').style.opacity = "0";
  document.querySelector('.cont_form_login').style.opacity = "0";

  setTimeout(function () {
    document.querySelector('.cont_form_sign_up').style.display = "none";
    document.querySelector('.cont_form_login').style.display = "none";
  }, 500);

}