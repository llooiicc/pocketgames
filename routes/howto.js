var express = require('express');
var router = express.Router();

/* GET home page. */
router
    .get('/', function (req, res, next) {

        res.render('how-to-use', {
            title: 'contact',
            active: 'none',
            errors : ""
        });

    });



module.exports = router;
