require('dotenv').config(); // Import and configure dotenv

const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MySQL Connection
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL database.');
});

// API endpoint
app.post('/api/careers', (req, res) => {
    const { firstName, lastName, email, phone, date, resumeLink } = req.body;

    console.log('Request Body:', req.body);

    const sql = 'INSERT INTO careers (firstName, lastName, email, phone, date, resumeLink) VALUES (?, ?, ?, ?, ?, ?)';
    db.query(sql, [firstName, lastName, email, phone, date, resumeLink], (err, result) => {
        if (err) {
            console.error('Error:', err);
            res.status(500).send('Error inserting data.');
        } else {
            res.send('Data inserted successfully.');
        }
    });
});

app.listen(3000, () => {
    console.log('Server running on port 3000.');
});
