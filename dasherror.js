var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('dasherror', {
	styles: '<link rel="stylesheet" type="text/css" href="/dasherror.css">'
    });
});

module.exports = router;