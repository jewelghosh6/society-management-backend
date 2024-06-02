require('dotenv').config();//{path:'../.env'}
const express = require('express');
const app = express();
const morgan = require('morgan')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use 'dev' format for logging (you can choose other formats or create a custom one)
app.use(morgan('dev'));


const port = process.env.APP_PORT;
const host = process.env.APP_HOST;

app.listen(port, host, () => console.log(`Application is running on Port http://${host}:${port}`));
// app.listen(port, () => console.log(`Application is running on Port ${port}`));


module.exports = app;