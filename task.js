//Priyanshu Gupta ----> Task-9
const fs = require("fs");
//for creation
fs.writeFileSync("test.txt", "This is a text");

//for reading
const a = fs.readFileSync("test.txt");
console.log(a.toString());

//for update
fs.appendFileSync("test.txt", "This is a text of Priyanshu");

//for delete
fs.unlinkSync("test.txt");
