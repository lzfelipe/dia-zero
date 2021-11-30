import React, { useState } from "react";

const Dots = () => {
  const [active, setActive] = useState("inicio");

  return (
    <div className="d-flex flex-column dots-container">
      <a href="#inicio" onClick={() => setActive("inicio")}>
        <span className={`dot ${active == "inicio" && "dot-active"}`}></span>
      </a>
      <a href="#simbol" onClick={() => setActive("simbol")}>
        <span className={`dot ${active == "simbol" && "dot-active"}`}></span>
      </a>
      <a href="#intro" onClick={() => setActive("intro")}>
        <span className={`dot ${active == "intro" && "dot-active"}`}></span>
      </a>
      <a href="#videos" onClick={() => setActive("videos")}>
        <span className={`dot ${active == "videos" && "dot-active"}`}></span>
      </a>
      <a href="#choices-1" onClick={() => setActive("choices-1")}>
        <span className={`dot ${active == "choices-1" && "dot-active"}`}></span>
      </a>
      {/* <a href="#choices-2">
        <span
          className={`dot ${active == "choices-2" && "dot-active"}`}
          onClick={() => setActive("choices-2")}
        ></span>
      </a> */}
    </div>
  );
};

export default Dots;
