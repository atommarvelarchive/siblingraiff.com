var port = process.env.PORT || 5000;

//setup express, mongo, and server vars
var express = require("express"),
    app = new express();    

app.set('view engine', 'ejs');
var fs = require('fs');

app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.static(__dirname + '/views'));


// Homepage
app.get("/", function(req, res){	
  res.render("home");	
});

app.get("/rtpb", function(req,res){
  res.render("rtpb");
});

app.listen(port);
