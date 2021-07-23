var express = require('express');
var app = express();

console.log("Hello World")

//app.get("/", (req, res) => res.send("Hello Express"))

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































 module.exports = app;
