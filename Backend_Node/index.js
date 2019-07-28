const mysql = require('mysql');
const express = require('express');
var app = express();
require('dotenv').config();
const bodyparser = require('body-parser');
//var urlencodedParser = bodyParser.urlencoded({ extended: false })

const cors = require('cors');

//---------------cross-orgin request---------//
const allowedOrigins = process.env.allowedOrigins.split(',');
app.use(cors()); //for access to all



app.use(bodyparser.json());

var mysqlConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'pms'
});

mysqlConnection.connect((err) => {
  if (!err)
    console.log('Db connection success');
  else
    console.log('Db connection not success \n Error :' + JSON.stringify(err, undefined, 2));
});


//Browser confirmation

app.get('/', (req, res) => {
  res.send("Backend Working!!")
});

//Login

app.post('/login', function (req, res) {

  var user = req.body.userid;
  var pwd = req.body.password;
  var type = req.body.usertype;

  var result = "";
  console.log(user + " " + pwd + " " + type);

  mysqlConnection.query("SELECT * FROM login WHERE `userid`=? AND `password`=? AND `usertype`=?;", [user, pwd, type], function (err, rs) {
    if (err) {
      result = "Invalid username or password";
      console.log("Invalid username or password");
    }
    else if (isEmptyObject(rs)) {
      result = "Invalid username or password";
      console.log("Invalid username or password");
    }
    else {
      result = rs;
      console.log("Success");
    }
    res.send(result);
    
    function isEmptyObject(obj) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          return false;
        }
      }
      return true;
    }

  });
  //connection.end();
});

app.post('/add', function (req, res) {

  var studentid = req.body.studentid;
  var fullName = req.body.fullName;
  var address = req.body.address;
  var batch = req.body.batch;
  var course = req.body.course;
  var highschool = req.body.highschool;
  var diploma = req.body.diploma;
  var graduation = req.body.graduation;
  var pg = req.body.pg;


  var result = "";
  // console.log(user + " " + pwd + " " + type);

  mysqlConnection.query("INSERT INTO student values (?, ?, ?, ?, ?, ?, ?, ?, ?);", [studentid, fullName, address, batch, course, highschool, diploma, graduation, pg], function (err, rs) {
    if (err) {
      result = "Error! Verify details again";
      console.log("Error! Verify details again");
    }
    else {
      result = ("Success");
      console.log("Success");
    }
    res.send(result);

  });
  //connection.end();
});

app.post('/update', function (req, res) {

  var studentid = req.body.studentid;
  var fullName = req.body.fullName;
  var address = req.body.address;
  var batch = req.body.batch;
  var course = req.body.course;
  var highschool = req.body.highschool;
  var diploma = req.body.diploma;
  var graduation = req.body.graduation;
  var pg = req.body.pg;


  var result = "";
  // console.log(user + " " + pwd + " " + type);

  mysqlConnection.query("UPDATE `student` SET `studentid` = ?, fullname = ?, address = ?, batch = ?, course = ?, highschool = ?, diploma = ?, graduation = ?, pg = ?  WHERE `studentid` = ?;", [studentid, fullName, address, batch, course, highschool, diploma, graduation, pg, studentid], function (err, rs) {
    if (err) {
      result = "Error! Verify details again";
      console.log("Error! Verify details again");
    }
    else {
      result = ("Success");
      console.log("Success");
    }
    res.send(result);

  });
  //connection.end();
});

app.get('/getall', (req, res) => {
  mysqlConnection.query('SELECT * FROM student;', (err, rows) => {
    if (!err)
      res.send(rows);
    else{
      console.log(err);
    }  
  })
});


// app.post('/remove', function (req, res) {

//   var studentid = req.body.studentid;
  
//   var result = "";
//   // console.log(user + " " + pwd + " " + type);

//   mysqlConnection.query("DELETE FROM `student` WHERE `studentid` = ?;" [studentid], function (err, rs) {
//     if (err) {
//       result = "Error! Verify details again";
//       console.log("Error! Verify details again");
//     }
//     else {
//       result = ("Success");
//       console.log("Success");
//     }
//     res.send(result);

//   });
//   //connection.end();
// });



app.get('/remove', (req, res) => {
  var studentid = req.query.studentid;
  console.log(studentid);
  mysqlConnection.query("DELETE FROM `student` WHERE `studentid` = ?;", [studentid], (err, rows) => {
    if (err)
    {
      res.send("Not Found");
      console.log(err);
    }
    else{
      res.send("Deleted Sucessfully!")
      
    }  
  })
});


//app.listen(3000,()=>console.log('express server is running at port:3000'));
app.listen(process.env.PORT, () => console.log('express server is running at port:' + process.env.PORT));