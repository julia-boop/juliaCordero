const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
    res.render('home')
});
router.get('/digital', function(req, res){
    res.render('digital')
})

module.exports = router