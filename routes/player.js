var express = require('express');
var router = express.Router();

console.log('[player.js]');

/* GET home page. */
router
    .get('/:game_type/:name', function (req, res, next) {

        if(req.params.game_type == 'offline'){
            res.render('offline-player', {
                title: req.params.name,
                active: 'none',
                game: req.params.name,
                gameType: req.params.game_type
            });
        }
        res.render('player', {
            title: req.params.name,
            active: 'none',
            game: req.params.name,
            gameType: req.params.game_type
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
