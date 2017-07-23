const express = require('express');
const request = require('request');
const fs = require('fs');
const app = express();
const port = 8080;
const url = "http://google.com";

//EXAMPLE 1, log the page in the console
// request(url, function(err, resp, body){
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(body);
//   }
// })

//EXAMPLE 2, download the page
const destination = fs.createWriteStream('./downloads/google2.html')
// request(url)
//   .pipe(destination)

request(url)
  .pipe(destination)
  .on('finish', function() {
    console.log('all done')
  })
  .on('error', function(err) {
    console.log(err);
  })


app.listen(port, function() {
  console.log('app listening on port 8080')
})
