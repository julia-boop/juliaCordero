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
router.post('/contact', async function(req, res){
        let transporter = await nodemailer.createTransport({
            host: "plesk.ar.conectemos.com",
            port: 25,
            auth: {
              user: process.env.MAIL_USER,
              pass: process.env.MAIL_PASS
            }
        });
        let mailOptions = {
            from: req.body.email,
            to: process.env.MAIL_USER,
            subject: req.body.title,
            text: (req.body.message != null || req.body.message != '') ? `${req.body.name} ${req.body.last_name} envio el siguiente mensaje: ${req.body.message}` : 'El usuario no adjunto ningun comentario'
        };
          
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
        }); 
})

module.exports = router