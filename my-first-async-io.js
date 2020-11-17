const fs = require('fs')
const process = require('process')
fs.readFile(process.argv[2], (error, str) => {
    if (error) {
        console.log(error)
    } else {
        console.log(str.toString().split('\n').length - 1)
    }
})
