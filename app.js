const express = require('express');
const request = require('request');
const fs = require('fs');
const app = express();
const port = 8080;

const url = "http://google.com";
request(url, function(err, resp, body){
  if(err) {
    console.log(err);
  } else {
    console.log(body);
  }
})

app.listen(port, function() {
  console.log('app listening on port 8080')
})
