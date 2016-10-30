"use strict"

function page1() {
    console.log('Page 1 requested')

    function sleep(milliSeconds) {
        let startTime = new Date().getTime()
        while(new Date().getTime() < startTime + milliSeconds);
    }

    sleep(10000)
    return "Page 1"
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