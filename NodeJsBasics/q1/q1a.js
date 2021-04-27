const xml_parser = require('xml-parser')
const fs = require('fs')

const xml_parser_helper = function (loc) {
    try {
        var data = fs.readFileSync(loc, 'utf8');
        const parsedXml = xml_parser(data);
        return parsedXml;
    } catch (e) {
        console.log('Error:', e.stack);
    }
}

const location = process.argv[2]
const parsedXml = xml_parser_helper(location)
console.log(parsedXml);


