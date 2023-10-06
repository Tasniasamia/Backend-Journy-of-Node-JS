const OS=require('os');
const path=require('path')

console.log(OS);
console.log(OS.userInfo());
console.log(OS.homedir());
console.log(OS.hostname());
console.log(OS.totalmem());
console.log(OS.freemem());

console.log(__dirname);
console.log(__filename);
console.log("join your dirname + /View",path.join(__dirname+'/View'));

let extention=path.extname("index.html");
console.log("Check path name",extention);



