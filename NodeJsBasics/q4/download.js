const fs = require('fs');
const request = require('request');

var download = function (uri, filename, callback) {
    request.head(uri, function (err, res, body) {
        if (err) {
            console.log(e);
            return;
        }
        request(uri)
            .pipe(fs.createWriteStream(filename))
            .on('close', callback)
    });
};

module.exports = download;