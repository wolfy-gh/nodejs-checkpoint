const fs = require("fs")
// console.log(fs.readFileSync(process.argv[2]))
var str = fs.readFileSync(process.argv[2])
console.log(str.toString().split('\n').length-1)
