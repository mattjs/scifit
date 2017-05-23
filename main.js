var express = require('express');
var app = express();
var exphbs = require('express-handlebars');
var path = require('path');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var expressSession = require('express-session');




app.engine('.hbs', exphbs({
    defaultLayout: 'main',
	extname: '.hbs',
	layoutsDir: path.join(__dirname, 'views')
}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator());
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressSession({secret: 'grizvok',
			saveUninitialized: true,
			resave: false
		       }));
app.use(require('./router'));


	
app.listen(8000);
