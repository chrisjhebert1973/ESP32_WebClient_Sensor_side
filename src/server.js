var http = require('http');
var url = require('url');

var sensor_value = 0;

http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var pn = q.pathname;
  switch(pn){
    case "/set":
        var qdata = q.query;
        sensor_value =  qdata.sensor_value;
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end("OK");
      console.log("Setting Sensor Value : " + sensor_value);
    break;
    case "/get":
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('value=' + sensor_value);
        console.log(sensor_value);
    break;
  }
}).listen(9090);
