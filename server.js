var express = require('express');

var port = process.env.PORT || 5000;

var app = express();
app.use(express.static(__dirname));
app.listen(port);

console.log('Running on http://localhost:%d/', port);
