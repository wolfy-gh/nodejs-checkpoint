const process = require('process'); 
// console.log(process.argv.length)
var res = 0
for (let i = 2; i < process.argv.length; i++){
    res += Number(process.argv[i])
}
console.log(res)