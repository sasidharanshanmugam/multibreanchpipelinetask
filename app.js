var mysql = require('mysql');
var express = require('express');
 
var app = express();
var port = process.env.PORT || 3000;
 
app.get('/',function(req, res){
   
   let connectionOptions = {
     host: process.env.MYSQL_HOST || 'localhost',
     port: process.env.MYSQL_PORT || '3306',
     user: process.env.MYSQL_USER || 'root',
     password: process.env.MYSQL_PASS || 'root'
   };
 
   let connection = mysql.createConnection(connectionOptions);
   if(!connection) res.send("Connection was not successful!");
   res.send("Connection made successfully after auto build 2!")
});
 
 
app.listen(port, function(){
    console.log('Sample Node app listening on port ' + port);
});