const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',      // change if needed
  password: '',      // your MySQL password
  database: 'registrationdb'
});

connection.connect((err) => {
  if (err) {
    console.error('❌ Database connection failed:', err.message);
  } else {
    console.log('✅ Connected to MySQL Database');
  }
});

module.exports = connection;
