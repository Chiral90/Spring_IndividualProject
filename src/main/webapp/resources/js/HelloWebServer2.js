/**
 * 
 */

var express = require('express')
  , http = require('http')
  , app = express();
//  , server = http.createServer(app);

var server = app.listen(8006, function() {
  console.log('Express server listening on port ' + server.address().port);
});