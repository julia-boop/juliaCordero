const express = require('express');
const router = express.Router();

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

module.exports = router