require('dotenv').config();//{path:'../.env'}
const express = require('express');
//const {name}=require('ejs');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//app.set('view-engine','ejs');

const port = process.env.APP_PORT;
const host = process.env.APP_HOST;

app.listen(port, "192.168.23.207", () => console.log(`Application is running on Port http://${host}:${port}`));

module.exports = app;