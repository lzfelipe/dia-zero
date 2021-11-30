import React from "react";
import Dots from "../components/Dots";
import Video from "../components/Video";
import Link from "next/link";

import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

const Videos = () => {
  return (
    <>
      <Dots choice="videos" />
      <div className="pages-container">
        <Video title="PILOTO" />
        <Video title="VIDEO 2" />
        <Video title="VIDEO 3" />

        <div className="w-100 d-flex justify-content-center pb-5 mobile-scroll">
          <Link href="/#intro">
            <a className="d-block">
              <AiOutlineUp size={30} />
            </a>
          </Link>
          <Link href="/choices#choices-1">
            <a className="d-block" style={{ marginLeft: 40 }}>
              <AiOutlineDown size={30} />
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Videos;
