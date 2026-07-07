function showAnswer(id) {
  var ans = document.getElementById(id);

  if (ans.style.display === "block") {
    ans.style.display = "none";
  } else {
    ans.style.display = "block";
  }
}

// ===== Dark Mode =====

const themeBtn = document.getElementById("theme-toggle");

if (themeBtn) {

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {

            themeBtn.innerHTML = "☀️";

            localStorage.setItem("theme", "dark");

        } else {

            themeBtn.innerHTML = "🌙";

            localStorage.setItem("theme", "light");

        }

    });

    if (localStorage.getItem("theme") === "dark") {

        document.body.classList.add("dark");

        themeBtn.innerHTML = "☀️";

    }

}


function searchSubjects() {

    let input = document
        .getElementById("subjectSearch")
        .value
        .toLowerCase();

    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        let text = card.innerText.toLowerCase();

        if (text.includes(input)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

}
// FAQ Accordion

document.querySelectorAll(".faq-question").forEach(button=>{

button.addEventListener("click",()=>{

const answer=button.nextElementSibling;

if(answer.style.display==="block"){

answer.style.display="none";

}

else{

document.querySelectorAll(".faq-answer").forEach(a=>a.style.display="none");

answer.style.display="block";

}

});

});
/* ===========================
   BACK TO TOP BUTTON
=========================== */

let topButton = document.getElementById("topBtn");

window.onscroll = function(){

if(document.body.scrollTop > 300 || document.documentElement.scrollTop > 300){

topButton.style.display="block";

}else{

topButton.style.display="none";

}

};

topButton.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

};
/* ===========================
   SCROLL REVEAL
=========================== */

function reveal(){

let reveals=document.querySelectorAll(".reveal");

for(let i=0;i<reveals.length;i++){

let windowHeight=window.innerHeight;

let elementTop=reveals[i].getBoundingClientRect().top;

let elementVisible=120;

if(elementTop<windowHeight-elementVisible){

reveals[i].classList.add("active");

}

}

}

window.addEventListener("scroll",reveal);

reveal();
/* ===========================
   GLOBAL SEARCH
=========================== */

const searchInput=document.getElementById("searchInput");

if(searchInput){

searchInput.addEventListener("keypress",function(e){

if(e.key==="Enter"){

let value=this.value.toLowerCase();

if(value.includes("note")){

window.location="notes.html";

}

else if(value.includes("video")){

window.location="videos.html";

}

else if(value.includes("course")){

window.location="courses.html";

}

else if(value.includes("roadmap")){

window.location="roadmap.html";

}

else if(value.includes("interview")){

window.location="interview.html";

}

else if(value.includes("profile")){

window.location="profile.html";

}

else{

alert("No matching page found.");

}

}

});

}
/* ===========================
   PRELOADER
=========================== */

window.addEventListener("load",function(){

const preloader=document.getElementById("preloader");

preloader.style.opacity="0";

preloader.style.visibility="hidden";

});
/* ===========================
   SERVICE WORKER
=========================== */

if ("serviceWorker" in navigator) {

window.addEventListener("load", () => {

navigator.serviceWorker.register("service-worker.js")

.then(() => {

console.log("Service Worker Registered");

});

});

}

function saveSubject(){

const title="Full Stack Development";

const content=document.getElementById("subjectNotes").innerHTML;

let notes=JSON.parse(localStorage.getItem("savedNotes")) || [];

const exists=notes.find(note=>note.title===title);

if(exists){

alert("Already Saved");

return;

}

notes.push({

title,

content

});

localStorage.setItem("savedNotes",JSON.stringify(notes));

alert("Full Stack Notes Saved Successfully ⭐");

}
function toggleProfile(){
    document.getElementById("profileDropdown")
    .classList.toggle("active");
}

function logout(){
    alert("Logout Successfully");
}

