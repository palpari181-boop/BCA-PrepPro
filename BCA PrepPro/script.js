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
