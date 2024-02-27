// server.mjs
import mysql from 'mysql2/promise';
import express from 'express';

const pool = mysql.createPool({
  host: 'your-mysql-host',       // Replace with the actual host of your MySQL server
  user: 'your-mysql-user',       // Replace with your MySQL username
  password: 'your-mysql-password', // Replace with your MySQL password
  database: 'your-mysql-database', // Replace with the name of your MySQL database
  connectionLimit: 10,
});

const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  try {
    const connection = await pool.getConnection();
    const [rows, fields] = await connection.query('SELECT * FROM your_table'); // Replace with your actual table name
    connection.release();

    res.json(rows);
  } catch (error) {
    console.error('Error executing query:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Amazing! Server is running on http://localhost:${port}`);
});
