function generateDigitalClockAsString() {
    var d = new Date();
    return d.toLocaleTimeString();
}

console.log(generateDigitalClockAsString());