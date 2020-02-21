var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

io.on('connection', function (socket) {
    console.log('[*] a user connected');

    const int = setInterval(() => {
        socket.emit("newdata", JSON.stringify({
            type: "message",
            msg: JSON.stringify({
                msg: "NewData" + Date.now(),
                type: "message"
            })
        }));
    }, 1000);

    socket.emit("asklatest", JSON.stringify({
        type: "message",
        msg: JSON.stringify([
            {
                msg: "LatestLog" + Date.now(),
                type: "message"
            }
        ])
    }));

    socket.on("disconnect", () => {
        console.log("[*] a user disconnected");
        clearInterval(int);
        socket = null;
    })
});

http.listen(8080, function () {
    console.log('listening on *:8080');
});