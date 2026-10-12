const intro = document.getElementById("intro");
intro.style.fontSize = "4rem";
intro.style.color = "black";

console.log(intro);

const theEmail = document.getElementById("email");
 console.dir(theEmail);
//theEmail.value = "Jackson@gmail.com";
//console.log(theEmail.value);

const submitBtn = document.getElementById("sub-Button");
submitBtn.style.color = "white";
submitBtn.style.cursor = "pointer";

const password = document.querySelector('input[type="password"]');
const showPassword = document.getElementById("showPassword");

showPassword.addEventListener("change", function () {
    if (showPassword.querySelector("input").checked) {
        password.type = "text";
    } else {
        password.type = "password";
    }
});
