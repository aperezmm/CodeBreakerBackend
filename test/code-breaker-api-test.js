var supertest = require('supertest'),
    chai =require('chai'),
    should = require('should'),
    assert = require('assert'),
    app = require('../app/./app');

var request = supertest(app); //Con esta linea supertest levanta en background.
var expect = chai.expect;

describe('GET /setsecret:number', function(){
    it('should return code 200', function(done){
        request.get('/setsecret/1234')
            .expect(200)
            .end(function(err, res){
                if(err) return done (err)
                done(err)
            });
    });


it('should return Content-Type application/json', function(done){
    request.get('/setsecret/1234')
        .expect(200)
        .expect('Content-Type',/json/)
        .end(function(err, res){
            if(err) return done (err)
            done(err)
        });
});

it('should return correct JSON Object', function(done){
    request.get('/setsecret/1234')
        .expect(200)
        .expect('Content-Type',/json/)
        .end(function(err, res){
            if(err) return done (err)
            should.not.exist(err);
            should.exist(res);
            res.body.should.be.an.Oject;
            should.exist(res.body.message);
            done()
        });
});


});

describe('GET /guess/:number', function(){
    it('should return code 200', function(done){
        request.get('/guess/1234')
            .expect(200)
            .end(function(err, res){
                if(err) return done (err)
                done(err)
            });
    });


it('should return Content-Type application/json', function(done){
    request.get('/guess/1234')
        .expect(200)
        .expect('Content-Type',/json/)
        .end(function(err, res){
            if(err) return done (err)
            done(err)
        });
});

it('should return correct JSON Object', function(done){
    request.get('/guess/1234')
        .expect(200)
        .expect('Content-Type',/json/)
        .end(function(err, res){
            if(err) return done (err)
            should.not.exist(err);
            should.exist(res);
            res.body.should.be.an.Oject;
            should.exist(res.body.result);
            done()
        });
});

it('should return correct JSON Object', function(done){
    request.get('/guess/1234')
        .expect(200)
        .expect('Content-Type',/json/)
        .end(function(err, res){
            if(err) return done (err)
            should.not.exist(err);
            should.exist(res);
            res.body.should.be.an.Oject;
            should.exist(res.body.result);
            assert.equal('XXXX', res.body.result);
            done()
        });
    });
});