//yy
__path = process.cwd();
//var favicon = require('serve-favicon');
var express = require('express'),
    cors = require('cors'),
    secure = require('ssl-express-www');
var { color } = require('./lib/color.js')

var mainrouter = require('./routes/main'),
    apirouter = require('./routes/api')

var app = express()
app.enable('trust proxy');
app.set("json spaces",2)
app.use(cors())
app.use(secure)
app.use(express.static("public"))

app.use('/', mainrouter);
app.use('/api', apirouter);

module.exports = app
