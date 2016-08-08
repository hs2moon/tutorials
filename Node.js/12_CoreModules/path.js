var path = require('path');
var websiteHome = "Desktop/asdfasdf//adfa/index.html";
var websiteAbout = "Desktop/asdfasdf/adfa/about.html";

console.log(path.normalize(websiteHome));
console.log(path.dirname(websiteAbout));
console.log(path.basename(websiteAbout));
console.log(path.extname(websiteAbout));