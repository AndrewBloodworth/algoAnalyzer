/* eslint-disable no-unused-vars */
import React from "react";
const Main = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        height: "100vh",
        width: "80vw",
        backgroundColor: "blue",
      }}
    >
      <h1>hello</h1>
      <section
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
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </section>
    </div>
  );
};

export default Main;
