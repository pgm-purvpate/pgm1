/* 
Introduction ArteveldeHS
*/

const os = require("os");
const firstName = 'Dion';
const lastName = 'Van Hecke';

const message = `
    +++++++++++++++++++++
    Name is: ${firstName}
    lastName is: ${lastName}
    +++++++++++++++++++++
    Platform: ${os.platform()}
    Release: ${os.release()}
    Hostname: ${os.hostname()}
    Version: ${os.version()}
    +++++++++++++++++++++
`;

//log message
console.log(message);

//person object

const person = {
name: "Spatel"

};

//begin webserver
const webserver_enabled = false;

if(webserver_enabled){
    const http = require ('http');
    const port = 8081;

    http.createServer(function (req,res) {
         res.writeHead(200, {"Content-Type": "text/html"});
         res.end(message);
    })
    .listen(port);
}else{
    console.log("Webserver not running");
}

//end webserver