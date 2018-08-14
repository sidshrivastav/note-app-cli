console.log('Starting app.');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js')

const argv = yargs
    .command('add', 'Add a new note', {
        title: {
            description: 'Title of note',
            demand: true,
            alias: 't'
        },
        body: {
            description: 'Body of note',
            demand: true,
            alias: 'b'
        }
    })
    .command('list', 'List all notes')
    .command('read', 'Read a note', {
        title: {
            description: 'Title of note',
            demand: true,
            alias: 't'
        }
    })
    .command('delete', 'Delete a note', {
        title: {
            description: 'Title of note',
            demand: true,
            alias: 't'
        }
    })
    .help()
    .argv;
var command = argv._[0];

if (command == "list"){
    notes.getAllNotes();
} else if (command == "add"){
    var note = notes.addNote(argv.title, argv.body);
    if(note === 1){
        console.log("Title: " + argv.title + " Added!");
    } else {
        console.log("Title: " + argv.title + " Already Used!");
    }
} else if (command == "read"){
    var note = notes.readNote(argv.title);
    if(note){
        console.log("Title: " + note.title);
        console.log("Body: " + note.body);
    } else {
        console.log("Not Found!!");
    }
} else if (command == "delete"){
    var note = notes.deleteNote(argv.title);
    if(note === 1){
        console.log("Title: " + argv.title + " Deleted!");
    } else {
        console.log("Title: " + argv.title + " Not Found!");
    }
} else if (!command){
    console.log("No input");
} else {
    console.log("Command not recognized")
}
