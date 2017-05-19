var expect = require('chai').expect;
var pigfrog = require('./index.js');

describe('pigfrog', function(){
    it('should contain a function called hello', function(){
        expect(pigfrog.hello).to.be.a('function');
    });

    it('should contain a function called bye', function() {
        expect(pigfrog.bye).to.be.a('function');
    });

    it('should contain a function called greetings', function() {
        expect(pigfrog.greetings).to.be.a('function');
    });
});
