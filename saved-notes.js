const notesContainer = document.getElementById("notesContainer");

let savedNotes =
JSON.parse(localStorage.getItem("savedNotes")) || [];

function displayNotes(){

    notesContainer.innerHTML = "";

    if(savedNotes.length === 0){

        notesContainer.innerHTML = `
        <h2 style="text-align:center;width:100%;">
        No Saved Notes Found 😔
        </h2>
        `;

        return;
    }

    savedNotes.forEach((note,index)=>{

        notesContainer.innerHTML += `
        
        <div class="note-card">

            <h3>${note.title}</h3>

            <p>${note.content}</p>

            <button class="delete-btn"
            onclick="deleteNote(${index})">

            Delete

            </button>

        </div>

        `;
    });
}

function deleteNote(index){

    savedNotes.splice(index,1);

    localStorage.setItem(
        "savedNotes",
        JSON.stringify(savedNotes)
    );

    displayNotes();
}

displayNotes();