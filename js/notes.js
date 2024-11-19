const noteInput = document.getElementById('note-input');
const addNoteBtn = document.getElementById('add-note-btn');
const noteList = document.getElementById('note-list');

function loadNotes() {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.forEach(note => addNoteToDOM(note));
}

// Function to add note to the DOM
function addNoteToDOM(noteText) {
    const li = document.createElement('li');
    li.innerHTML = `
        ${noteText} <button onclick="deleteNote('${noteText}')">Delete</button>
    `;
    noteList.appendChild(li);
}

// Function to add a note
function addNote() {
    const noteText = noteInput.value.trim();
    if (noteText === '') return; // Don't add empty notes

    // Add note to localStorage
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.push(noteText);
    localStorage.setItem('notes', JSON.stringify(notes));

    // Add note to the DOM
    addNoteToDOM(noteText);

    // Clear the input
    noteInput.value = '';
}

// Function to delete a note
function deleteNote(noteText) {
    // Remove from localStorage
    let notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes = notes.filter(note => note !== noteText);
    localStorage.setItem('notes', JSON.stringify(notes));

    // Remove from the DOM
    noteList.innerHTML = '';
    loadNotes(); // Reload notes from localStorage after deletion
}

// Event listeners
addNoteBtn.addEventListener('click', addNote);
window.addEventListener('DOMContentLoaded', loadNotes);