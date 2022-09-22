const fs = require("fs");

let data = fs.readFileSync("./loginStyle.css", "utf8").replace(/\n/g, "");
console.log(data);