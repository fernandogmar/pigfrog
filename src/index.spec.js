var expect = require('chai').expect;
var pigfrog = require('./index.js');

describe('pigfrog', function(){
    it('should contain a function called hello', function(){
        expect(pigfrog.hello).to.be.a('function');
    });
});
