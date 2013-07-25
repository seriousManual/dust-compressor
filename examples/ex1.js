var path = require('path');
var fs = require('fs');

var dust = require('dustjs-linkedin');

require('../').install(dust);

var a = dust.compileFn(fs.readFileSync(path.join(__dirname, './ex1.dust')).toString());

a({data:[1,2,3]}, function(error, rendered) {
    console.log(rendered);
});