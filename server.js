require('dotenv').config();//{path:'../.env'}
const express = require('express');
const morgan = require('morgan')
const cors = require('cors');


const http = require('http');
const { configureSocket } = require('./socket');
// const socketIo = require('socket.io');

const app = express();

const server = http.createServer(app);

const io = configureSocket(server)
// const io = socketIo(server);

app.use(cors({ origin: '*' }));  //This will allow all cross origin request.By-Default app serve only same origin request 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use 'dev' format for logging (you can choose other formats or create a custom one)
app.use(morgan('dev'));


const port = process.env.APP_PORT;
const host = process.env.APP_HOST;

server.listen(port, host, () => console.log(`Application is running on Port http://${host}:${port}`));
// app.listen(port, () => console.log(`Application is running on Port ${port}`));


module.exports = {
    server, app
}