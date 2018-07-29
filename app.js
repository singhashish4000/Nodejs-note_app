//console.log('Starting app');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js')
const _ = require('lodash');
const yargs = require('yargs');

// console.log(process.argv)
const title = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
};

const body = {
    describe: 'Body of note',
    demand: true,
    alias: 'b'
};     

const argv = yargs
            .command('add','Add a new note',{
              title: title,
              body: body
            })
            .command('list','List all notes')
            .command('read','Read a note', {
                title: title
            })
            .command('remove','Remove a note', {
                title: title
            })
            .help()
            .argv;
var command = argv._[0];


//console.log('Command', command)

if (command == 'add') {
    
    var note = notes.addNote(argv.title, argv.body);
    // note != null ? console.log('Note Created') : console.log('Note title should be unique');
    if (note) {
        console.log('Notice: ','Note Created');
        notes.logNote(note);
    }else {
        console.log('Notice: ','Note title should be unique');   
    }

} else if (command == 'list') {
 
    var allNotes = notes.listNote();
    console.log(`Notice: Found ${allNotes.length} note(s).`)
    allNotes.forEach((note) => {
        notes.logNote(note);
    });
} else if (command == 'read') {
    
    var note = notes.readNote(argv.title);
    if (note) {
        console.log('Notice: ','Note Read');
        notes.logNote(note);
    }else {
        console.log('Notice: ','Note not found');   
    }

} else if (command == 'remove') {

   var note = notes.removeNote(argv.title);
   var message = note ? 'Notice: Note was removed': 'Notice: Note not found';
   console.log(message);

} else {
    console.log('Notice: ','No commands');
}

//console.log(_.uniq([1,2,1,2,2,'Ash','Ash']))

// console.log(_.isString(true));
// console.log(_.isString('Ash'));

// var res = notes.addNote();
// console.log(res);

//console.log('Results: ',notes.add(2,2));

// var user = os.userInfo();
// //console.log(user);

// fs.appendFile('greetings.txt',`Hello ${user.username}!.You are ${notes.age}.`,(e) => {
//     if(e) {
//         console.log('Eroor '+e);
//     }
// });


