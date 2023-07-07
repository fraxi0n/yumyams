const express = require('express')
// const Api = require('./resources/api_Mr/api.router')

const mysql = require('mysql');

const app = express();


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'yumyams'
});

// connection.query('insert into  values(?,?)', [name, date], (error))


connection.connect((error) => {
    if (error) {
        console.error('Error connecting to the database: ', error);
        return;
    }
    console.log('Connected to the database!');
});



app.use(express.json());

app.get('', (req, res) => {
    res.send('hello guy');
});

app.post('/sweet', (req, res) => {

    const name = req.body.name;
    const test = req.body.test;
    // const date = req.body.date;


    connection.query('insert into sweet_win values (?,?)', [name, test], (error) => {
        if (error) {
            console.error('Error connecting to the database: ', error);
            return;
        }
        res.send("POSTED")
    })
}
)



app.listen(8000, () => console.log("ecoute en cours sur 8000 ..."))