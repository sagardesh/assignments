const handlebars = require('handlebars')
const fs = require('fs')

//read the template
var template = fs.readFileSync('template.js','utf8');
var compliedTemplate = handlebars.compile(template);

//get json data
const data = JSON.parse(fs.readFileSync('data.json','utf8'));

//template against data
var result = compliedTemplate(data)
fs.writeFileSync('output.xml',result);



