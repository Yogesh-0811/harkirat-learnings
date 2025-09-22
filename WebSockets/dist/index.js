import { WebSocketServer } from 'ws';
const wss = new WebSocketServer({ port: 8080 });
wss.on("connection", function (socket) {
    console.log("user connected");
    setInterval(() => {
        socket.send("Current price of solona is " + Math.random());
    }, 500);
    socket.send("hello");
});
//# sourceMappingURL=index.js.map