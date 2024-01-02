const express = require('express');
const app = express();
const http = require('http');
const { Server } = require('socket.io');

//Config the dotenv file...
require('dotenv').config();
const PORT = process.env.PORT;

//create a basic server...
const httpServer = http.createServer(app);

//Static file middleware...
app.use(express.static('./public'));

//Route...
app.get('/', (req, res) => {
    res.render('index');
});

// Socket.....

const io = new Server(httpServer);

io.on('connection', (socket) => {
    console.log(`${socket.id} connected`);
    socket.on('disconnect', () => {
        console.log(`${socket.id} disconnect`);
    });

    socket.on('message', (message) => {
        io.emit('message', message);
    });
});

//connect the server...
httpServer.listen(PORT, (err) => {
    if (err) {
        console.log("Server connection error.");
    } else {
        console.log(`Server connected on port ${PORT}`);
    }
});