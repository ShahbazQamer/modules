
var express = require ('express');
var bodyParser = require ('body-parser');
var mongoose = require ('mongoose');
var app = express();
var PORT = process.env.PORT || 3000;
mongoose.connect('mongodb://atrix:atrix@ds161109.mlab.com:61109/mong');
var db = mongoose.connection;



var users = require('./routes/users');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public'));
app.use('/users', users);




app.listen(PORT);
console.log('Started on Port>>'+PORT); 