const async = require('async');
const _ = require('lodash');
const fs = require('fs');
const download = require('./download')
const urlList = require('./urlList')

let index = 0;
let currLoc = ''
const urlQueue = async.queue(function ({ index, url }, callback) {
    if (index % 5 == 0) {
        currLoc = __dirname + '/imgs' + index;
        if (!fs.existsSync(currLoc))
            fs.mkdirSync(currLoc);
    }
    download(url, `${currLoc}/${index}.jpg`, function () {
        console.log(`Downloaded image no ${index}`);
    });
    callback();
}, 5);

urlQueue.drain(() => {
    console.log('The queue has finished processing!');
});

_.each(urlList, function (task) {
    urlQueue.push({
        index,
        url: urlList[index++]
    }, function (err) {
        if (err) { return console.log('error in adding tasks to queue'); }
        console.log('pushed to queue!');
    });
});

