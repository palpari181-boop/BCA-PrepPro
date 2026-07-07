// =========================================
// BCAHub Profile System
// =========================================

// ---------- Open Popup ----------
function openPopup() {

    document.getElementById("editPopup").style.display = "flex";

    document.getElementById("nameInput").value =
        localStorage.getItem("name") || "";

    document.getElementById("courseInput").value =
        localStorage.getItem("course") || "";

    document.getElementById("semesterInput").value =
        localStorage.getItem("semester") || "";

    document.getElementById("collegeInput").value =
        localStorage.getItem("college") || "";

    document.getElementById("locationInput").value =
        localStorage.getItem("location") || "";

    document.getElementById("emailInput").value =
        localStorage.getItem("email") || "";

    document.getElementById("phoneInput").value =
        localStorage.getItem("phone") || "";

    document.getElementById("githubInput").value =
        localStorage.getItem("github") || "";

    document.getElementById("linkedinInput").value =
        localStorage.getItem("linkedin") || "";
}

// ---------- Close Popup ----------
function closePopup() {
    document.getElementById("editPopup").style.display = "none";
}

// ---------- Save Profile ----------
function saveProfile() {

    localStorage.setItem("name",
        document.getElementById("nameInput").value);

    localStorage.setItem("course",
        document.getElementById("courseInput").value);

    localStorage.setItem("semester",
        document.getElementById("semesterInput").value);

    localStorage.setItem("college",
        document.getElementById("collegeInput").value);

    localStorage.setItem("location",
        document.getElementById("locationInput").value);

    localStorage.setItem("email",
        document.getElementById("emailInput").value);

    localStorage.setItem("phone",
        document.getElementById("phoneInput").value);

    localStorage.setItem("github",
        document.getElementById("githubInput").value);

    localStorage.setItem("linkedin",
        document.getElementById("linkedinInput").value);

    loadProfile();

    closePopup();

    alert("✅ Profile Updated Successfully!");
}

// ---------- Load Profile ----------
function loadProfile() {

    const name = localStorage.getItem("name");
    const course = localStorage.getItem("course");
    const semester = localStorage.getItem("semester");
    const college = localStorage.getItem("college");
    const location = localStorage.getItem("location");
    const email = localStorage.getItem("email");
    const phone = localStorage.getItem("phone");
    const github = localStorage.getItem("github");
    const linkedin = localStorage.getItem("linkedin");

    if(name){
        document.getElementById("profileName").textContent = name;
        document.getElementById("fullName").textContent = name;
    }

    if(course){
        document.getElementById("profileCourse").textContent = "🎓 " + course;
        document.getElementById("course").textContent = course;
    }

    if(semester){
        document.getElementById("profileSemester").textContent = "📚 " + semester;
        document.getElementById("semester").textContent = semester;
    }

    if(college){
        document.getElementById("profileCollege").textContent = "🏫 " + college;
        document.getElementById("university").textContent = college;
    }

    if(location){
        document.getElementById("profileLocation").textContent = "📍 " + location;
        document.getElementById("location").textContent = location;
    }

    if(email){
        document.getElementById("email").textContent = email;
    }

    if(phone){
        document.getElementById("phone").textContent = phone;
    }

    if(github){
        document.getElementById("github").innerHTML =
        `<a href="${github}" target="_blank">${github}</a>`;
    }

    if(linkedin){
        document.getElementById("linkedin").innerHTML =
        `<a href="${linkedin}" target="_blank">${linkedin}</a>`;
    }

    // Load Profile Image
    const savedImage = localStorage.getItem("profileImage");

    if(savedImage){
        document.getElementById("profileImage").src = savedImage;
    }
}

// ---------- Profile Image Upload ----------
document.addEventListener("DOMContentLoaded", function(){

    loadProfile();

    const imageInput = document.getElementById("imageInput");

    if(imageInput){

        imageInput.addEventListener("change", function(){

            const file = this.files[0];

            if(!file) return;

            const reader = new FileReader();

            reader.onload = function(e){

                document.getElementById("profileImage").src = e.target.result;

                localStorage.setItem(
                    "profileImage",
                    e.target.result
                );

            };

            reader.readAsDataURL(file);

        });

    }

});