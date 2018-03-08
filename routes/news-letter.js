var express = require('express');
var router = express.Router();

/* GET home page. */
router
    .get('/', function (req, res, next) {
        res.render('news-letter', {
            title: 'stay connect',
            active: 'none'
        });

    });

module.exports = router;
