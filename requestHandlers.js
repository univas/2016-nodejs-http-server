"use strict"

const fs = require('fs')

function page1(response) {
    console.log('Request handler "Page 1" was called')

    fs.readFile("./index.html", "utf-8", function onReturn(error, data) {
        if(error) throw error
        response.statusCode = 200
        response.setHeader("Content-Type", "text/html")
        response.write(data)
        response.end()
    })
}

function page2(response) {
    console.log('Request handler "Page 2" was called')
    response.write("Page 2")
    response.end()
}

//Public API
module.exports = {
    'page1': page1,
    'page2': page2
}