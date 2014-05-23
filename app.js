var express = require('express');
var app = express();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static(__dirname + '/public'));


app.get('/', function (req, res) {
    res.render('index', { title: 'ejs' });
});


app.get('/test', function (req, res) {
    res.send({
        column1: 100,
        column2: 200,
        column3: 100,
        column4: 200,
        column5: 100,
        column6: 200,
        column7: 100,
        column8: 200
    });
});

app.listen(8888);