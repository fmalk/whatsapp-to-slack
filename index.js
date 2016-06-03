var express            = require('express'),
	bodyparser         = require('body-parser'),
	mailgun            = require('mailgun-js'),
	http               = require('http');

var app = express();
var mailgun_server = mailgun({
	apiKey: process.env.MAILGUN_API_KEY,
	domain: process.env.MAILGUN_DOMAIN
});

// create application/json parser
var jsonparser = bodyparser.json();

// create application/x-www-form-urlencoded parser
var urlencodedparser = bodyparser.urlencoded();

app.set('port', process.env.PORT || 80);
app.use(app.router);

app.post('/email-spv', urlencodedparser, parseEmail);

function parseEmail(req, res, next) {
	console.log(req.body);
	res.send(200);
}

var server = http.createServer(app);
server.listen(process.env.PORT || 80, process.env.IP || '127.0.0.1');