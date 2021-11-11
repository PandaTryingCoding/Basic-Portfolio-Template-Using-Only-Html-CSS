const express = require('express')
const request = require('request')
const app = express();

const port = 3000;

app.get('/', (req,res) => {
        res.send('Hello World!!!');
});


app.get('/get', function(req,res,next){
        request({
                uri: 'https://api.covid19api.com/',
        }).pipe(res)

});

app.get('/summary', function(req,res,next){
        request({
                uri: 'https://api.covid19api.com/summary'
        }).pipe(res)

});


app.listen(port, () => {});
