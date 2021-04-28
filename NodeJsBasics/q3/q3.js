const request = require('request')
const fs  = require('fs')

request('https://www.google.com/',function(err, res, body) {
    if(err){
        console.log(err);
        return;
    }
    fs.writeFileSync('google.html',body);
});

