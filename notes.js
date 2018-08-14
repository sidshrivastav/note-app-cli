const fs = require('fs')

var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync("notes.json");
        return JSON.parse(notesString);
    } catch (e){
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync("notes.json", JSON.stringify(notes));
}

var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };
    
    var duplicateNotes = notes.filter((note) => note.title === title );
    
    if(duplicateNotes.length === 0){
        notes.push(note);
        saveNotes(notes);
        return 1;
    } else {
        return 0;
    }
    
};

var deleteNote = (title) => {
    var notes = fetchNotes();
    
    var filteredNotes = notes.filter((note) => note.title != title );
    
    if(filteredNotes.length < notes.length){
        saveNotes(filteredNotes);
        return 1; 
    } else {
        return 0;
    }
    
};

var readNote = (title) => {
    var notes = fetchNotes();
    
    var filteredNotes = notes.filter((note) => note.title === title );
    
    return filteredNotes[0];
};

var getAllNotes = () => {
    var notes = fetchNotes();
    
    var noOfNotes = notes.length - 1;
    
    while(noOfNotes != -1){
        console.log("Title: " + notes[noOfNotes].title);
        console.log("Body: " + notes[noOfNotes].body);
        noOfNotes -= 1;
    }
    
};

module.exports = {
    addNote,
    deleteNote,
    readNote,
    getAllNotes
};