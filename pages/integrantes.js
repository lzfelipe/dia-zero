import React from "react";
import Link from "next/link";

const Integrantes = () => {
  return (
    <div className="container section py-5 pages-container" id="integrantes">
      <div className="row mb-3 align-items-center justify-content-around">
        <div className="col-6 col-md-11">
          <h1 className="main-title title-section">INTEGRANTES</h1>
        </div>

        <div className="col-6 col-md-1 d-flex justify-content-end">
          <Link href="/choices#choices-2">
            <a href="#choices-2">
              <img src="images/back.png" className="float-right" />
            </a>
          </Link>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-12 col-md-4 mb-4 text-center">
          <img
            className="img-fluid img-fotos"
            src="images/integrantes/bruno.png"
          />
          <h1 className="mt-3">Bruno</h1>
        </div>
        <div className="col-12 col-md-4 mb-4 text-center">
          <img
            className="img-fluid img-fotos"
            src="images/integrantes/akio.png"
          />
          <h1 className="mt-3">Gabriel</h1>
        </div>
        <div className="col-12 col-md-4 mb-4 text-center">
          <img
            className="img-fluid img-fotos"
            src="images/integrantes/luiz.png"
          />
          <h1 className="mt-3">Luiz</h1>
        </div>
        <div className="col-12 col-md-4 mb-4 mb-md-0 text-center">
          <img
            className="img-fluid img-fotos"
            src="images/integrantes/rafaela.png"
          />
          <h1 className="mt-3">Rafaela</h1>
        </div>
        <div className="col-12 col-md-4 mb-4 mb-md-0 text-center">
          <img
            className="img-fluid img-fotos"
            src="images/integrantes/victor.png"
          />
          <h1 className="mt-3">Vitor</h1>
        </div>
      </div>
    </div>
  );
};

export default Integrantes;
