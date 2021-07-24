var express = require('express');
var app = express();



app.use((req, res, next) => {
  let string = req.method + " " + req.path + " - " + req.ip;
  console.log(string)
  next()
})
console.log("Hello World")

app.get("/", (req, res) => res.send("Hello Express"))

const absolutePath = __dirname + "/views/index.html"
console.log(absolutePath)
app.get("/", (req, res) => res.sendFile(absolutePath))

app.use('/public', express.static(__dirname + '/public'))

app.get('/json', (req, res) => {
  if (process.env.MESSAGE_STYLE === 'uppercase'){
    res.json({message: "Hello json".toUpperCase()})
  } else {
    res.json({message: "Hello json"})
  }
})

app.get('/now', (req, res, next) => {
  req.time = new Date().toString();
  next()
}, (req, res) => {
  res.send({time: req.time})
})

app.get('/:word/echo', (req, res) => {
  res.json({echo: req.params.word})
})

app.get('/name', (req, res) => {
  res.json({name: 'firstname lastname'})
})






























 module.exports = app;
