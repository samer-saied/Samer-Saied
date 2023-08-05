const express = require("express");
const config = require("config");
const http = require("http");
const app = express();
const server = http.createServer(app);
const socketServ = require("socket.io");
const io = socketServ(server);

io.on("connection", socket => {
    socket.on("sendMsgFromFront", body => {
        console.log(body)
        io.emit("sendMsgFromBack", body)
    })
})
const port = process.env.PORT || config.port;
server.listen(port, () => console.log(`Listening on port:${port}...`));