require('dotenv').config();//{path:'../.env'}
const express=require('express');
//const {name}=require('ejs');
const app=express();

app.use(express.json());
app.use(express.urlencoded({extended: true})); 

//app.set('view-engine','ejs');

const port=process.env.APP_PORT;
app.listen(port, () => console.log(`Application is running on Port ${port}...`));

module.exports=app;