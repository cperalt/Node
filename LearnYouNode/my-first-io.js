const fs = require('fs')
const {argv} = require('process');


const readFile = fs.readFileSync(`${argv[2]}`);
const str = readFile.toString().split("");
const filterStr = str.filter((item) => {
     return item == "\n";
})
console.log(filterStr.length);


