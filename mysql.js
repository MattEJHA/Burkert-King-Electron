var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  port : '3306',
  user     : 'root',
  password : null,
  database : 'burkert_king'
});
 
connection.connect();
var sql = 'SELECT `username` FROM `user`';
connection.query(sql, function (error, results, fields) {
 if (error) console.log(error.code);
 else {
     console.log(results);
     const resultDiv = document.getElementById('resultDiv');
     resultDiv.innerText = results[0].username;
    //  $('#resultDiv').text(results[0].username); //emp_name is column name in your database
 }
});


