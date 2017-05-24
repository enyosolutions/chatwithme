var express = require('express'),
    router = express.Router(),
    Article = require('../models/article');
module.exports = function(app) {
    // console.log(app._io);
    app.use('/', router);
};

router.get('/', function(req, res, next) {
    var articles = [new Article(), new Article()];
    var data = Date.now() + "-" + Math.round(Math.random() * 100000);
    var crypto = require('crypto');
    var room = crypto.createHash('md5').update(data).digest("hex");
    res.render('index', {
        title: 'The Captain Chat room',
        name: req.query.name,
        room: room
    });
});

router.get('/chat', function(req, res, next) {
    res.redirect("/");
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
