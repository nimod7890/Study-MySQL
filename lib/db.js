var mysql=require('mysql');
var db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'BomDatabase'
});
db.connect();
module.exports=db;