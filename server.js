var express = require('express');
var compression = require('compression');

var PORT = 8080;

var app = express();

if (process.env.NODE_ENV == 'production') {
	app.enable('trust proxy');
}
app.use(compression());
app.all('*', function (req, res) {
	res.end(req.method + ' ' + req.url);
});

app.listen(PORT, function () {
	console.log("Server running on port", PORT);
});
