var fs = require('fs');

// Read file content

fs.readFile('text.tex', 'utf8', function(err, data) {
    if (err) throw err;
    console.log(data);
});


// Create a new file
fs.writeFile(
    `newfile.tex`,
    'Hello, World!',
    function(err) {
        if (err) throw err;
        console.log('File has been saved!');
    }
)


// Append data to an existing file

fs.appendFile('text.tex', '\nAppended text!', function(err) {
    if (err) throw err;
    console.log('Data has been appended!');
});


 // Rename a file

fs.rename('newfile.tex', 'addedfile.tex', function(err) {
    if (err) throw err;
    console.log('File renamed successfully!');
});

// Delete a file

fs.unlink('addedfile.tex', function(err) {
    if (err) throw err;
    console.log('File deleted successfully!');
});
