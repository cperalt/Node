// console.log(process.argv)
//

const {argv} = require('process');

function sum() {
    count = 0;
    for (let i = 2; i < argv.length; i++) {
        count += Number(argv[i]);
    }
    return count;
}

console.log(sum());

