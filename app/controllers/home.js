var express = require('express'),
    router = express.Router(),
    Article = require('../models/article');
module.exports = function(app) {
    // console.log(app._io);
    app.use('/', router);
};

router.get('/', function(req, res, next) {
    var articles = [new Article(), new Article()];
    res.render('index', {
        title: 'Captain place',
        articles: articles
    });
});

router.get('/chat', function(req, res, next) {
    console.log("this");
    res.render('index', {
        title: 'Welcome ' + req.query.name,
        name: req.query.name
    });
});

router.get('/chat/:chatRoom', function(req, res, next) {
    console.log("new chatroom !", req.params.chatRoom);
    console.log("");
    console.log("");
    res.render('chat', {
        title: 'Welcome ' + req.query.name,
        name: req.query.name
    });
});
