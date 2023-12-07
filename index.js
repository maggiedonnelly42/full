var express = require("express");
var app = express();

var items = require('./products.json')

app.set('view engine', 'ejs');


app.get('/', function(req, res){


    res.render("home",{items})

app.use(express.static('views'));

app.use(express.static('style'));

app.use(express.static('images'));



});

app.get('/otherpage', function(req,res){

  res.render("weirdstuff.ejs")

});

app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0" , function(){
  console.log("App is Running ............ Yessssssssssssssss!")
});