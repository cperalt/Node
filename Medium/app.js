
const { readFile } = require('fs');

readFile('./planets.txt', 'utf8', (err, data) => {
    console.log(data);
});

