// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/:num", function (request, response) {
  var valid = (new Date(timestamp)).getTime() > 0;
  var myobj = {};
  if (/\s/.test(request.params.num)) {
      
      myobj.unix = new Date(request.params.num).getTime()/1000;
      if (myobj.unix > 0) {
      myobj.natural = request.params.num;
      } else {myobj.natural = null;}
  } else {
      var str = new Date(parseInt(request.params.num)*1000);
      if (str > 0) {
      myobj.unix = parseInt(request.params.num);     
    
      var locale = "en-us",
      month = str.toLocaleString(locale, { month: "long" });
      myobj.natural = str.getDate() + ' ' + month + ', ' + str.getFullYear();} else {
        myobj.unix = null;
        myobj.natural = null;
  } }
  
  response.send(myobj);
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
