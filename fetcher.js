let argv = process.argv;
const request = require("request");
const fs = require('fs');


let URL = argv[2];
let path = argv[3];

request(URL, (error, response, body) => {
  
  fs.writeFile(path,body,err => {
    if (err) {
      console.error(err);
    }
    filesize = body.length
    console.log(`Downloaded and saved ${filesize} bytes to ${path}`);
  })

});