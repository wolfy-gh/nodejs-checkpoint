const http = require("http")

http.get(process.argv[2], (res) => {
    res.setEncoding('utf-8')
    res.on('data', (data) => {
        console.log(data)
    })
}).on('error', (error) => {
    console.log(error)
})