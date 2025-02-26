const mysql = require('mysql2');


const connection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: 'root',
    database: 'Estacionamento'
});

connection.connect((err) => {
    if (err){
        throw err
    } else{
        console.log('conexão com o banco OK!')
    }
});


module.exports = connection;