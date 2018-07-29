//console.log('Staring notes.js');
const fs = require('fs');

var fetchNotes = () => {
  try {
    var notesString  = fs.readFileSync('notes-data.json');
    return notes = JSON.parse(notesString);
  } catch (e) {
    return [];
  }
};

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json',JSON.stringify(notes))     
};

var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title,
    body
  };
  
  var duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

var listNote = () => {
  return fetchNotes();
};

var readNote = (title) => {
  var notes = fetchNotes();
  var note  = notes.find((note) => {
    return note.title === title;
  });
  //saveNotes(newNotes);
  return note;
};

var removeNote = (title, body) => {
  var notes = fetchNotes();
  var newNotes  = notes.filter((note) => {
    return note.title != title;
  });
  saveNotes(newNotes);
  return notes.length !== newNotes.length;
};

var logNote = (note) => {
  console.log('Title: ',note.title);
  console.log(`Body: ${note.body}`);
}


module.exports = {
  addNote,
  listNote,
  readNote,
  removeNote,
  logNote
}