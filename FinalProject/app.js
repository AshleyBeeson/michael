var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var delay = require('express-delay');

var app = express();

//connect to mongo database
var promise = mongoose.connect("mongodb://localhost/db", {useMongoClient: true});
var db = mongoose.connection;
mongoose.Promise = global.Promise;

app.use(express.static('public'));

app.use(delay(100));
 
 app.get('/', function(req, res){
    res.sendFile(__dirname + "/public/index.html");
});

//get method from api/bugs, makes the data in to JSON format
 app.get('/api/bugs', function(req, res) {
	db.collection("bugs").find().toArray(function(err, docs) {
		res.json(docs);
	});
 });
 
const PORT = 8080;
const server = app.listen(PORT, function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log("App listening at http://%s:%s", host, port);
});