var port = process.env.PORT || 5000;
//setup express, mongo, and server vars
var express = require("express"),
    program = require('commander'),
    app = new express();    

app.set('view engine', 'ejs');
var fs = require('fs');

app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.static(__dirname + '/views'));

program
  .version('0.0.1')
  .option('-o, --aaron', 'aaron\'s personal website')
  .option('-y, --amy', 'amy\'s personal website')
  .parse(process.argv);

var choice = program.aaron ? require("./aaron.json") : require("./amy.json");

// Homepage
app.get("/", function(req, res){	
  res.render("home", {person:choice});	
});


app.listen(port);
