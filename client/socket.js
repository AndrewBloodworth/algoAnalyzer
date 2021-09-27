import io from "socket.io-client";

const socket = io(window.location.origin);

socket.on("connect", () => {
  console.log("I am now connected to the server!");
  socket.on("new-line", (data) => {
    console.log(data);
    // store.dispatch(gotNewMessageFromServer(message));
  });
});

export default socket;
