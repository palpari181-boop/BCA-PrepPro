const yesBtn = document.getElementById("yesBtn");

const noBtn = document.getElementById("noBtn");

yesBtn.addEventListener("click",function(){

localStorage.removeItem("loggedInUser");

alert("Logged Out Successfully 👋");

window.location.href="login.html";

});

noBtn.addEventListener("click",function(){

window.location.href="profile.html";

});