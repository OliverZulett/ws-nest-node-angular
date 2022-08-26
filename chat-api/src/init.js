const { createServer } = require("http");
const { Server } = require("socket.io");

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: {
    origin: "*"
  }
});

io.on("connection", (socket) => {
  socket.on("new-message", message => {
    console.log("MESSAGE RECEIVED: ", message);
    socket.emit("response", message);
  });
  console.log("new connection");
});

httpServer.listen(3000);
