
const express = require('express');
const app = express();

let apiRoutes = require("./router-routes")
let bodyParser = require('body-parser');
let mongoose = require('mongoose');

app.use(bodyParser.urlencoded({
    extended: true
 }));

 app.use(bodyParser.json());

 
mongoose.connect('mongodb://localhost/resthub', { useNewUrlParser: true});
var db = mongoose.connection;
if(!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")



var port = process.env.PORT || 8080;

app.get('/',(req,res) => {
    res.send("Hello World")

});

app.use('/api', apiRoutes)

app.listen(port, ()=> {
    console.log("Running server on port " + port);
});