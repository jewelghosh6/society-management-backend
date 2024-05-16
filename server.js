require('dotenv').config();//{path:'../.env'}
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const port = process.env.APP_PORT;
const host = process.env.APP_HOST;

app.listen(port, host, () => console.log(`Application is running on Port http://${host}:${port}`));

module.exports = app;