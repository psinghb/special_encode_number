const encode = require('./encode')
// Get process.stdin as the standard input object.
var standard_input = process.stdin;

// Set input character encoding.
standard_input.setEncoding('utf-8');

// Prompt user to input data in console.
console.log("Please input number to be encoded, else type `exit` to exit");

// When user input data and click enter key.
standard_input.on('data', function (data) {

    // User input exit.
    if(data === 'exit\n'){
        // Program exit.
        console.log("User input complete, program exit.");
        process.exit();
    } else {
        // Print user input in console.
        console.log('User Input Data : ' + data + ', encoded - ' + encode(parseInt(data)));
    }
});