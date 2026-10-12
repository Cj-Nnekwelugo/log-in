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

const showPasswordBtn = document.getElementById("showPassword");

showPasswordBtn.addEventListener("change", function() {
     if (showPasswordBtn.checked) {
         showPasswordBtn.type = "text";
         } else { 
            showPasswordBtn.type = "password";

          } });

