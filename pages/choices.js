import Video from "../components/Video";
import Link from "next/link";
import Dots from "../components/Dots";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

export default function Home() {
  return (
    <div className="bg-black">
      <Dots choice="choices-1" />
      <div
        className="container section d-flex flex-wrap justify-content-center align-items-around text-center py-5 pages-container"
        id="choices-1"
      >
        <div className="col-12 pt-0 pt-md-5">
          <img src="images/logo.png" />
        </div>

        <div className="col-12">
          <h1 className="secondary-title">
            QUER VER UM POUCO POR TRÁS DO PROJETO
            <span className="text-orange">?</span>
          </h1>
        </div>

        <div className="col-12 row  justify-content-between">
          <a href="#choices-2" className="col-12 col-md-4">
            <h1 className="choices-text">
              SIMM<span className="text-orange">!</span>
            </h1>
          </a>
          <a href="#choices-2" className="col-12 col-md-4">
            <h1 className="choices-text">
              AH VEJO, JÁ TO AQUI<span className="text-orange">...</span>
            </h1>
          </a>
          <Link href="/#inicio">
            <a className="col-12 col-md-4">
              <h1 className="choices-text">
                NÃO, VALEU<span className="text-orange">.</span>
              </h1>
            </a>
          </Link>
        </div>
      </div>

      <div
        className="container section d-flex flex-wrap justify-content-center align-items-around text-center py-5 pages-container"
        id="choices-2"
      >
        <div className="col-12 ">
          <img src="images/logo.png" />
        </div>

        <div className="col-12 pt-4">
          <h1 className="secondary-title">
            QUER VER UM POUCO POR TRÁS DO PROJETO
            <span className="text-orange">?</span>
          </h1>
        </div>

        <div className="col-12 row justify-content-between pt-4">
          <Link href="/rascunhos">
            <a className="col-12 col-md-4">
              <h1 className="choices-text text-center">RASCUNHOS</h1>
            </a>
          </Link>
          <Link href="/integrantes">
            <a className="col-12 col-md-4">
              <h1 className="choices-text text-center">INTEGRANTES</h1>
            </a>
          </Link>
          <a
            href="https://docs.google.com/document/d/1XqEPoOnPYqJdhLekd_7WRXYl2Qn6fp6b/edit?usp=sharing&ouid=101128919413065920640&rtpof=true&sd=true"
            target="_blank"
            rel="noreferrer"
            className="col-12 col-md-4"
          >
            <h1 className="choices-text text-center">MONOGRAFIA</h1>
          </a>
        </div>
        <div className="col-12 row d-flex justify-content-between pb-4">
          <a
            href="https://drive.google.com/file/d/14kySOVemQuiiCt0KKWgc1VLpDBb4z1qb/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="col-12 col-md-4"
          >
            <h1 className="choices-text text-center"> BIBLÍA</h1>
          </a>
          <a
            href="https://greeneletron.org.br/localizador"
            target="_blank"
            rel="noreferrer"
            className="col-12 col-md-4"
          >
            <h1 className="choices-text text-center">RECICLE</h1>
          </a>
          <a
            href="https://drive.google.com/file/d/1QlUZqBFEJVNEd_b_AlmxAuQGXOIWXzWn/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="col-12 col-md-4"
          >
            <h1 className="choices-text text-center">DESIGN KIT</h1>
          </a>
        </div>

        <div className="w-100 d-flex justify-content-center mobile-scroll">
          <Link href="/choices">
            <a className="d-block">
              <AiOutlineUp size={30} />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
