const form = document.getElementById("registerForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const username = document.getElementById("username").value.trim();

    const email = document.getElementById("email").value.trim();

    const password = document.getElementById("password").value;

    const confirmPassword = document.getElementById("confirmPassword").value;

    if(password !== confirmPassword){

        alert("Passwords do not match!");

        return;

    }

    const user = {

        username,

        email,

        password

    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Registration Successful 🎉");

    window.location.href = "login.html";

});