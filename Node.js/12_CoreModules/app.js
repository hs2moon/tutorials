//File System Core modules that write and read the file.
var fs = require('fs');
fs.writeFileSync("corn.txt","Corn is great, corn is life");

console.log(fs.readFileSync("corn.txt").toString());