const emailrex = /^[a-zA-Z0-9.!#$%&'/^_`{|}~-]+@[a-zA-Z]+.[a-zA-Z]+/;
const mobilerex = /^[0-9]*10/;
// register validation
let emailerr = "";
let mobileerr = "";
let passworderr = "";
let confirmpassworderr = "";
let validEmail;
let validMobile;
let validPassword;
let html = "";
const errdiv = document.getElementById("errMsg");
const registerbtn = document.getElementById("register");
const emailinp = document.getElementById("email"),
  passwordinp = document.getElementById("password"),
  confirmpasswordinp = document.getElementById("confirmPassword"),
  mobileinp = document.getElementById("mobile");
emailinp.addEventListener("blur", (event) => {
  email = emailinp.value.toLowerCase();
  console.log(email);
  // console.log(email.match(emailrex))
  if (email.match(emailrex) == null && email.length != 0) {
    emailerr = `<p class='my-2 w-100 centered h-100 text-danger bg-warning border border-danger rounded'>Email Not Valid</p>`;
    html = emailerr + mobileerr + passworderr + confirmpassworderr;
    errdiv.innerHTML = html;
  } else {
    emailerr = "";
    html = emailerr + mobileerr + passworderr + confirmpassworderr;
    errdiv.innerHTML = html;
  }
});
mobileinp.addEventListener("blur", (event) => {
  mobile = mobileinp.value;
  if (
    mobile.match(mobilerex) == null &&
    mobile.length != 0 &&
    mobile.length != 10
  ) {
    mobileerr = `<p class='my-2 w-100 centered h-100 text-danger bg-warning border border-danger rounded'>Mobile Not Valid</p>`;
    html = emailerr + mobileerr + passworderr + confirmpassworderr;
    errdiv.innerHTML = html;
  } else {
    mobileerr = "";
    html = emailerr + mobileerr + passworderr + confirmpassworderr;
    errdiv.innerHTML = html;
  }
});
confirmpasswordinp.addEventListener("blur", (event) => {
  password = passwordinp.value;
  confirmpassword = confirmpasswordinp.value;
  if (
    confirmpassword != password &&
    confirmpassword.length != 0 &&
    password.length != 0
  ) {
    confirmpassworderr = `<p class='my-2 w-100 centered h-100 text-danger bg-warning border border-danger rounded'>Password not Match</p>`;
    html = emailerr + mobileerr + passworderr + confirmpassworderr;
    errdiv.innerHTML = html;
  } else {
    confirmpassworderr = "";
    html = emailerr + mobileerr + passworderr + confirmpassworderr;
    errdiv.innerHTML = html;
  }
});
// const registerbtn = document.getElementById('register')
registerbtn.addEventListener("click", (event) => {
  if (
    html != "" ||
    emailinp.value.length == 0 ||
    mobileinp.value.length == 0 ||
    confirmpasswordinp.value.length == 0 ||
    passwordinp.value.length == 0
  ) {
    event.preventDefault();
    err = `<p class='my-2 w-100 centered text-center h-100 text-danger bg-warning border border-danger rounded'>Plz Fill All Fields <br>Or <br>Check Is All Correct</p>`;
    errdiv.innerHTML = err;
  }
});

const loginbtn = document.getElementById("submit");
