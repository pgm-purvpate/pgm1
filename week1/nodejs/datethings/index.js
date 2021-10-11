const date = require('date-and-time')

var test1 = new Date()// Date 
var datestring = test1.toLocaleDateString("nl-NL");
var timestring = test1.toTimeString("nl-NL");

console.log(datestring);
console.log(timestring);

/*
Math.floor to generate epoch from Date
*/

console.log(`
=====================================================================
Amount of seconds since UNIX Epoch to convert = ${Math.floor(+test1 / 1000)}
=====================================================================
Formatted date in Dutch locale and Belgian timezone: ${date.format(test1,'DD/MM/YYYY, HH:mm:ss')}
=====================================================================
${Math.floor(+test1 / 1000)} seconds = TODO
=====================================================================
`)