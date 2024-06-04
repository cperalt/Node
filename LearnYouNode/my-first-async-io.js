const { readFile } = require('fs');



readFile(process.argv[2], 'utf8', (err, data) => {
    // return data.split('\n').length - 1;
    console.log(data.split('\n').length - 1);
})



