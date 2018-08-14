const fs = require('fs');

var originalNote = {
    title : "Test",
    body : "This is test."
}

var originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');

var note = JSON.parse(originalNoteString);

console.log(note.title);