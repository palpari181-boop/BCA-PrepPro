import { auth } from "./firebase-config.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

const form = document.getElementById("loginForm");

form.addEventListener("submit", async function (e) {

    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (email === "") {
        alert("Enter Email");
        return;
    }

    if (password === "") {
        alert("Enter Password");
        return;
    }

    try {

        await signInWithEmailAndPassword(auth, email, password);

        alert("Login Successful 🎉");

        window.location.href = "profile.html";

    } catch (error) {

        alert(error.message);

    }

});