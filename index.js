var express = require('express'),
    pug = require('pug'),
    path = require('path');
    config = require('./config');

var app = express();

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname + '/public')));

app.get('/', function(req, res){
    res.render('index', {
        title: config.titles[0][1],
        config: config
    });
});

app.get('/:page', function(req, res){
    var title = "";
    for(var i = 0; i < config.titles; i++){
        if(config.titles[i][0] === req.params.page){
            title = config.titles[i][1];
            
        }
    }
    res.render(req.params.page, {title: title,
                                config: config});
});

app.listen(3000);