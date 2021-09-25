/* eslint-disable no-unused-vars */
import React, { useState } from "react";
const Main = () => {
  const [lines, setLines] = useState([
    { raw: "abcdefg" },
    { raw: "hijklmn" },
    { raw: "opqrstu" },
    { raw: "vwxyz" },
  ]);
  const handleKeyPress = (event) => {
    event.preventDefault();
    if (event.key === "Enter") {
      console.log("nl");

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
        width: "80vw",
      }}
    >
      <h1>hello</h1>
      {lines.map((line, idx) => (
        <section
          key={idx}
          style={{
            width: "100%",
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
