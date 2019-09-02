var express = require ('express');
CodeBreaker = require ('./code-breaker');
var cors = require('cors')

var app = express();
app.use(cors());

app.get('/setsecret/:secret', function(req, res){
    let number = req.params.secret;
    CodeBreaker.setSecret(number);
    res.send(
        {message: 'Ok, let the game begins'
    });
});

app.get('/guess/:number', function(req, res){
    let number = req.params.number;
    let gues = CodeBreaker.codeBreaker(number);
    res.send({
        result: gues
    })
});

module.exports = app;