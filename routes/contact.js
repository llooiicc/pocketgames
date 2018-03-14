var express = require('express');
var router = express.Router();

var Mailer = require('../bin/Mailer');
var mailer = new Mailer();

/* GET home page. */
router
    .get('/', function (req, res, next) {

        res.render('contact', {
            title: 'contact',
            active: 'none',
            errors : ""
        });

    })
    .post('/send', function (req, res, next) {

        var datas = req.body;

        var formValidity = mailer.checkFormValidity(datas);

        if(formValidity == 0){

            mailer.sendMail(datas);
            res.render('contact', {
                title: 'contact',
                active: 'none',
                errors : ""
            });
        }
        else{
            console.log("[contact] form check error with status code " + formValidity);

            res.render('contact', {
                title: 'contact',
                active: 'none',
                errors : [formValidity]
            });
        }

    });



module.exports = router;
