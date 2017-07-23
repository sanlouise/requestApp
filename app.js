let express = require('express');
let request = require('request');
let fs = require('fs');
let app = express();
let port = 8080;

app.listen(port, function() {
  console.log('app listening on port 8080')
})
