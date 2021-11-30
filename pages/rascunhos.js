import React from "react";
import Link from "next/link";

const Rascunhos = () => {
  return (
    <div className="container section py-5 pages-container" id="rascunhos">
      <div className="row mb-3 align-items-center justify-content-around">
        <div className="col-6 col-md-11">
          <h1 className="main-title title-section">RASCUNHOS</h1>
        </div>

        <div className="col-6 col-md-1 d-flex justify-content-end">
          <Link href="/#choices-2">
            <a href="">
              <img src="images/back.png" className="float-right" />
            </a>
          </Link>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-12 col-md-6 mb-4 mb-md-0">
          <img
            className="img-fluid img-rascunho"
            src="images/rascunhos/1.png"
          />
        </div>
        <div className="col-12 col-md-6 mb-4 mb-md-0">
          <img
            className="img-fluid img-rascunho"
            src="images/rascunhos/2.png"
          />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-12 col-md-6 mb-4 mb-md-0">
          <img
            className="img-fluid img-rascunho"
            src="images/rascunhos/3.png"
          />
        </div>
        <div className="col-12 col-md-6 mb-4 mb-md-0">
          <img
            className="img-fluid img-rascunho"
            src="images/rascunhos/4.png"
          />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-12 col-md-6 mb-4 mb-md-0">
          <img
            className="img-fluid img-rascunho"
            src="images/rascunhos/5.png"
          />
        </div>
        <div className="col-12 col-md-6 mb-4 mb-md-0">
          <img
            className="img-fluid img-rascunho"
            src="images/rascunhos/6.png"
          />
        </div>
      </div>

      <div className="row pb-4">
        <div className="col-12 col-md-6 mb-4 mb-md-0">
          <img
            className="img-fluid img-rascunho"
            src="images/rascunhos/7.png"
          />
        </div>
        <div className="col-12 col-md-6 mb-4 mb-md-0">
          <img
            className="img-fluid img-rascunho"
            src="images/rascunhos/8.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Rascunhos;
