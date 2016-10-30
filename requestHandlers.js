"use strict"

const shellCommand = require("child_process").exec

function page1() {
    console.log('Page 1 requested')

    let content = "empty"
    shellCommand("ls -lah", function onReturn (error, stdout, stderr) {
        content = stdout
        console.log(stdout)
    })
    return content
}

function page2() {
    console.log('Page 2 requested')
    return "Page 2"
}

//Public API
module.exports = {
    'page1': page1,
    'page2': page2
}