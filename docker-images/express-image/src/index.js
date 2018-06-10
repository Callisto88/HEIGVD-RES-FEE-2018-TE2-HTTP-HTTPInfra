var http = require('http');
var os = require('os');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(`${os.hostname()}\n`);
}).listen(3000);
