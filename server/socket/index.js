// const Message = require('../db/models/message');
// const Channel = require('../db/models/channel');

module.exports = (io) => {
  io.on("connection", (socket) => {
    console.log(socket.id, " has made a persistent connection to the server!");

    socket.on("new-line", (message) => {
      socket.broadcast.emit("new-line", message);
    });
  });
};
