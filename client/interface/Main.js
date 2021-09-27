/* eslint-disable no-unused-vars */

import socket from "../socket";
import React, { useState } from "react";
const Main = () => {
  const [lines, setLines] = useState([
    { raw: "const helloWorld = () => {" },
    { raw: "[...Array(100000).fill()].forEach(item =>" },
    { raw: "let i = 1;" },
    { raw: "if (i === 100000) return true;" },
    { raw: "};" },
  ]);
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      socket.emit("new-line", "data");
      setLines([...lines, "new line"]);
    }
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        height: "100vh",
        width: "100vw",
      }}
    >
      <h1>hello</h1>
      {lines.map((line, idx) => (
        <section
          key={idx}
          style={{
            width: "90%",
            height: 30,
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
          }}
        >
          <input
            type="text"
            defaultValue={line.raw}
            style={{
              width: "100%",
              height: "100%",
            }}
            onKeyPress={handleKeyPress}
          />
        </section>
      ))}
    </div>
  );
};

export default Main;
