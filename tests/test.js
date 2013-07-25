var fs = require('fs');

var expect = require('chai').expect;
var dust = require('dustjs-linkedin');
var dustCompressor = require('../index');

dustCompressor.install(dust);

describe('dust-compressor', function() {

    it('should compress all whitespaces, no data', function(done) {
        var compiled = dust.compileFn(fs.readFileSync(__dirname + '/testFile1.dust').toString());

        compiled({}, function(error, rendered) {
            expect(rendered).to.equal('\nno data\n');

            done();
        });
    });

    it('should compress all whitespaces, with data', function(done) {
        var compiled = dust.compileFn(fs.readFileSync(__dirname + '/testFile1.dust').toString());

        compiled({data:[1,2]}, function(error, rendered) {
            expect(rendered).to.equal('datapoint. anotherDataPoint.\ndatapoint. anotherDataPoint.\n');

            done();
        });
    });

});