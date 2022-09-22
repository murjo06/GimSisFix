const fs = require("fs");

let data = fs.readFileSync("./loginStyle.css", "utf8").replace(/\n/g, "");
let text = "var style = document.createElement('style');\nstyle.innerHTML = '" + data + "';\ndocument.body.appendChild(style);";
fs.writeFileSync("./console.js", text);