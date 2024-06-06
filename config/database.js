import mysql from "mysql2";

//connection to db

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"merchandise"
});

export default db;