const xml2json = require('xml2json')
const fs = require('fs')
const location = process.argv[2]

const convertToJson = function (fileLocation) {
    try {
        var xmlContent = fs.readFileSync(fileLocation, 'utf8');
        return xml2json.toJson(xmlContent);
    } catch (err) {
        console.log('Error:', err.stack);
    }
}

const json = convertToJson(location)
console.log(json);