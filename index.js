const express = require('express');
const app = express();
const http = require('http');

//Config the dotenv file...
require('dotenv').config();
const PORT = process.env.PORT;

//create a basic server...
const httpServer = http.createServer(app);

//Static file middleware...
app.use(express.static('./public'));

httpServer.listen(PORT, (err) => {
    if (err) {
        console.log("Server connection error.");
    } else {
        console.log(`Server connected on port ${PORT}`);
    }
})