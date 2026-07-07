const form = document.getElementById("loginForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const username = document.getElementById("username").value.trim();

    const password = document.getElementById("password").value.trim();

    if(username === ""){

        alert("Enter Username");

        return;

    }

    if(password === ""){

        alert("Enter Password");

        return;

    }

    // Demo Login

    localStorage.setItem("loggedInUser", username);

    alert("Login Successful 🎉");

    window.location.href = "profile.html";

});