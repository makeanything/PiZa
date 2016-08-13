var express = require('express')
var webpack = require('webpack')
var path = require('path')
var config = require('../webpack.config')
var wDM = require('webpack-dev-middleware')
var wHM = require('webpack-hot-middleware')
var mongoose = require('mongoose')

var app = express()

require('../models/Recipe')

var compiler = webpack(config)

let mongoUrl = process.env.MONGO_URL || 'mongodb://localhost/piza';
mongoose.connect(mongoUrl,(err) => {
  if (err) console.log(err);
  else console.log('Connected to ' + mongoUrl);
});

// mongoose.connect('mongodb://localhost/reactrecipes', (err) => {
//   if(err) console.log(err)
//   else console.log('Connected to mongodb://localhost/reactrecipes')
// })

app.use(wDM(compiler, {noInfo: true, publicPath: config.output.publicPath}))
app.use(wHM(compiler))
app.use(require("body-parser").json({
  extended:true
}));
app.use(express.static('./dist'))


app.get('/', function(req, res) {
  res.sendFile(path.resolve('client/index.html'))
})

app.use("/api", require("./api"))

var port = process.env.PORT || 8080

app.listen(port, function(error) {
  if(error) throw error
  console.log("Express server is listening on port", port)
})
