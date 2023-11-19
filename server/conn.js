const mysql = require("mysql2");
// const express = require('mysql');
// const cors = require('cors'); 


// const app = express();


const conn = mysql.createConnection({
    user:process.env.DB_USER,
    host:process.env.DB_HOST,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_DATABASE

});


conn.connect((err)=>{
    if(err) throw err;
    console.log("DB connected");

});

// app.use(cors());
// const db = mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     password:"",
//     database:"" 

// })


// app.listen(8081,() => {
//     console.log("Listening...");
// })







module.exports = conn;