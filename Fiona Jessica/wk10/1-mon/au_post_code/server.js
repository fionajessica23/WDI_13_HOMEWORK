var fs = require('fs');
var http = require('http');

var csvJSON = function(csv) {
  var lines = csv.split("\n");

  var result = [];

  var headers = lines[0].split(",");

  for(var i = 1; i < (lines.length - 1); i++){

    var obj = {};
    var currentline = lines[i].replace(/ {2,}/g, '').split(",");

    for(var j = 0; j < headers.length; j++){
      obj[headers[j]] = currentline[j];
    }
    result.push(obj);
  }
  // debugger
//return result; //JavaScript object
return JSON.stringify(result); //JSON
}


var app = function(request, response) {

  fs.readFile('au_postcode.csv', 'utf-8', function(err, data) {
    response.write( csvJSON(data) );
    response.end();
  })
}


var server = http.createServer( app );
server.listen(8888);
