#!/usr/bin/env node
var net = require("net");
var repl = require("repl");
// const io = require("socket.io")(require("./server"));
// require("./server/socket")(io);
net
  .createServer((socket) => {
    repl
      .start({
        prompt: "Node.js via Unix socket> ",
        input: socket,
        output: socket,
      })
      .on("exit", () => {
        socket.end();
      });
  })
  .listen("/tmp/node-repl-sock");
