var express = require('express');
var router = express.Router();

console.log('[player.js]');

/* GET home page. */
router
    .get('/:name', function (req, res, next) {
        res.render('player', {
            title: req.params.name,
            active: 'none',
            game: req.params.name
        });
    })
    .post('/', function (req, res, next) {

        var gameUrl = req.body.url;
        console.log(gameUrl);

        res.render('player', {
            title: 'player',
            gameUrl: gameUrl
        })
    });


module.exports = router;
