import React from "react";

const App = () => {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#262626",
  };

  const diamondContainer = {
    position: "relative",
    width: "200px",
    height: "200px",
    transform: "rotate(45deg)",
  };

  const lineStyle = (color, position) => ({
    position: "absolute",
    backgroundColor: color,
    width: "190px",
    height: "20px",
    ...position,
  });

  const cornerSquareStyle = (color, position) => ({
    position: "absolute",
    width: "20px",
    height: "20px",
    backgroundColor: color,
    ...position,
  });

  const textContainerStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%) rotate(-45deg)",
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: "22px",
    fontWeight: "bold",
    fontFamily: "Arial, sans-serif",
  };

  const andSymbolStyle = { color: "#F06629" };

  return (
    <div style={containerStyle}>
      <div style={diamondContainer}>
        <div
          style={lineStyle("#66CC99", {
            left: "0",
            top: "50%",
            transform: "translate(-50%, -50%) rotate(270deg)",
          })}
        ></div>
        <div
          style={lineStyle("#F06629", {
            top: "0",
            left: "50%",
            transform: "translate(-50%, -50%)",
          })}
        ></div>
        <div
          style={lineStyle("#D9D9D9", {
            right: "0",
            top: "50%",
            transform: "translate(50%, -50%) rotate(90deg)",
          })}
        ></div>
        <div
          style={lineStyle("#6699CC", {
            bottom: "0",
            left: "50%",
            transform: "translate(-50%, 50%) rotate(180deg)",
          })}
        ></div>

        <div
          style={cornerSquareStyle("#754d4b", { top: "-10px", left: "-10px" })}
        ></div>
        <div
          style={cornerSquareStyle("#D6551E", { top: "-10px", right: "-10px" })}
        ></div>
        <div
          style={cornerSquareStyle("#4E7BA8", {
            bottom: "-10px",
            right: "-10px",
          })}
        ></div>
        <div
          style={cornerSquareStyle("#0D98BA", {
            bottom: "-10px",
            left: "-10px",
          })}
        ></div>

        <div style={textContainerStyle}>
          <div>
            HTML<span style={andSymbolStyle}>&</span>CSS
          </div>
          <div style={{ fontSize: "10px", fontWeight: "normal" }}>
            design and build websites
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
