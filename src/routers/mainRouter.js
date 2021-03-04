const express = require('express');
const router = express.Router();
require('dotenv').config();
const nodemailer = require('nodemailer');


router.get('/', function(req, res){
    res.render('home')
});
router.get('/digital', function(req, res){
    res.render('digital')
});
router.get('/analogic', function(req, res){
    res.render('analogic')
});
router.get('/contact', function(req, res){
    res.render('contact')
});
router.post('/contact',  function(req, res){
        let transporter =  nodemailer.createTransport({
            host: "plesk.ar.conectemos.com",
            port: 25,
            auth: {
              user: process.env.MAIL_USER,
              pass: process.env.MAIL_PASS
            }
        });
        let mailOptions = {
            from: req.body.email,
            to: 'contact@juliacordero.com',
            subject: req.body.title,
            text: req.body.message
        };
          
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('mail enviado' + info.response);
            }
        }); 
///aaa
})

module.exports = router