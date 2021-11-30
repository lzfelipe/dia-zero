import React, { useState } from "react";
import Link from "next/link";

const Dots = (props) => {
  const [active, setActive] = useState(
    props.choice != null ? props.choice : "inicio"
  );

  return (
    <div className="d-flex flex-column dots-container">
      <Link href="/#inicio">
        <a onClick={() => setActive("inicio")}>
          <span className={`dot ${active == "inicio" && "dot-active"}`}></span>
        </a>
      </Link>

      <Link href="/#simbol">
        <a onClick={() => setActive("simbol")}>
          <span className={`dot ${active == "simbol" && "dot-active"}`}></span>
        </a>
      </Link>

      <Link href="/#intro">
        <a onClick={() => setActive("intro")}>
          <span className={`dot ${active == "intro" && "dot-active"}`}></span>
        </a>
      </Link>

      <Link href="/videos#videos">
        <a onClick={() => setActive("videos")}>
          <span className={`dot ${active == "videos" && "dot-active"}`}></span>
        </a>
      </Link>

      <Link href="/choices/#choices-1" onClick={() => setActive("choices-1")}>
        <a>
          <span
            className={`dot ${active == "choices-1" && "dot-active"}`}
          ></span>
        </a>
      </Link>

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
