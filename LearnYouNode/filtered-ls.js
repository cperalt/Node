
const { readdir } = require('fs');

const filePath = process.argv[2];
const fileExt = process.argv[3];

readdir(filePath, (err, list) => {
    const filteredList = list.filter(item => item.includes("." + fileExt));
    filteredList.forEach(item => console.log(item));
});
