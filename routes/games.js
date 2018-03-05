var express = require('express');
var router = express.Router();

/* GET home page. */
router
    .get('/', function (req, res, next) {
        res.render('games', {
            title: 'games',
            active: 'games'
        });

    })
    .get('/:name', function (req, res, next) {
        res.render('player', {
            title: req.params.name,
            active: 'none',
            game: req.params.name
        });
    });

module.exports = router;
