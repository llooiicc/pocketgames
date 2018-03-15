let DbAcces = require('../bin/datas/DbAcces');
let dbAcces = new DbAcces();

let express = require('express');
let router = express.Router();

/* GET home page. */
router
    .get('/', function (req, res, next) {
        res.render('news-letter', {
            title: 'stay connect',
            active: 'none',
            response: 'null'
        });

    })
    .post('/send', function (req, res, next) {

        let mail = req.body.mail;

        if(mail){

            dbAcces.insertCustomer(mail).then(result => {
                res.render('news-letter', {
                    title: 'stay connect',
                    active: 'none',
                    response: 0
                });
            }).catch(err => {
                res.render('news-letter', {
                    title: 'stay connect',
                    active: 'none',
                    response: err
                });
            });

        }
        else{
            res.render('news-letter', {
                title: 'stay connect',
                active: 'none',
                response: 1
            });
        }
    });

module.exports = router;
