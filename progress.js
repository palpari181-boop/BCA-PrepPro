// ==========================================
// BCAHub Progress System
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    loadProgress();

});

// ==========================================
// Load Progress
// ==========================================

function loadProgress() {

    // Overall Progress
    let overall = localStorage.getItem("overallProgress") || 15;

    document.getElementById("overallPercent").innerText = overall + "%";

    // Semester Progress
    updateSemester("sem1", localStorage.getItem("sem1") || 20);
    updateSemester("sem2", localStorage.getItem("sem2") || 10);
    updateSemester("sem3", localStorage.getItem("sem3") || 0);
    updateSemester("sem4", localStorage.getItem("sem4") || 0);
    updateSemester("sem5", localStorage.getItem("sem5") || 0);
    updateSemester("sem6", localStorage.getItem("sem6") || 0);

    // Learning Stats
    document.getElementById("notesRead").innerText =
        localStorage.getItem("notesRead") || 5;

    document.getElementById("videosWatched").innerText =
        localStorage.getItem("videosWatched") || 0;

    document.getElementById("roadmapsVisited").innerText =
        localStorage.getItem("roadmapsVisited") || 2;

    document.getElementById("streak").innerText =
        localStorage.getItem("streak") || 1;

    document.getElementById("completedSubjects").innerText =
        localStorage.getItem("completedSubjects") || 1;

    document.getElementById("remainingSubjects").innerText =
        localStorage.getItem("remainingSubjects") || 35;

}

// ==========================================
// Semester Progress
// ==========================================

function updateSemester(id, value) {

    document.getElementById(id + "Bar").style.width = value + "%";

    document.getElementById(id + "Text").innerText = value + "%";

}

// ==========================================
// Update Overall Progress
// ==========================================

function updateOverallProgress() {

    let s1 = parseInt(localStorage.getItem("sem1") || 0);
    let s2 = parseInt(localStorage.getItem("sem2") || 0);
    let s3 = parseInt(localStorage.getItem("sem3") || 0);
    let s4 = parseInt(localStorage.getItem("sem4") || 0);
    let s5 = parseInt(localStorage.getItem("sem5") || 0);
    let s6 = parseInt(localStorage.getItem("sem6") || 0);

    let overall = Math.round((s1 + s2 + s3 + s4 + s5 + s6) / 6);

    localStorage.setItem("overallProgress", overall);

    document.getElementById("overallPercent").innerText = overall + "%";

}

// ==========================================
// Save Semester Progress
// ==========================================

function saveSemesterProgress(semester, percent) {

    localStorage.setItem(semester, percent);

    updateSemester(semester, percent);

    updateOverallProgress();

}

// ==========================================
// Achievement Checker
// ==========================================

function checkAchievements() {

    let notes = parseInt(localStorage.getItem("notesRead") || 0);

    let completed = parseInt(localStorage.getItem("completedSubjects") || 0);

    if (notes >= 10) {

        console.log("Achievement: Book Lover");

    }

    if (completed >= 6) {

        console.log("Achievement: Semester Master");

    }

}

// ==========================================
// Reset Progress
// ==========================================

function resetProgress() {

    if (confirm("Reset all progress?")) {

        localStorage.removeItem("overallProgress");

        localStorage.removeItem("sem1");
        localStorage.removeItem("sem2");
        localStorage.removeItem("sem3");
        localStorage.removeItem("sem4");
        localStorage.removeItem("sem5");
        localStorage.removeItem("sem6");

        localStorage.removeItem("notesRead");
        localStorage.removeItem("videosWatched");
        localStorage.removeItem("roadmapsVisited");
        localStorage.removeItem("streak");
        localStorage.removeItem("completedSubjects");
        localStorage.removeItem("remainingSubjects");

        location.reload();

    }

}