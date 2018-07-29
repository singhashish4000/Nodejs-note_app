// var obj = {
//     namd: 'Andrew'
// };

// var stringObj = JSON.stringify(obj);

// console.log(typeof stringObj);
// console.log(stringObj)

// var personString = '{"name":"Ashihsh","age":24}';

// var perosn = JSON.parse(personString);

// console.log(perosn);

// console.log(perosn.name)

// console.log(typeof perosn)

const fs = require('fs');

var originalNote = {
    title: 'Some title',
    body: 'Some body'
};

var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json',originalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);