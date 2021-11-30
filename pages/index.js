import Video from "../components/Video";
import Link from "next/link";
import Dots from "../components/Dots";

export default function Home() {
  return (
    <div className="bg-black">
      <Dots />
      <div
        className="container section d-flex justify-content-center align-items-center text-center pages-container "
        id="inicio"
      >
        <div className="">
          <h1 className="text-orange main-title">BEM VINDO AO</h1>
          <h1 className="main-title-name">DIA ZERO</h1>
          <h1 className="text-orange main-title">00.00.00</h1>
        </div>
      </div>
      <div
        className="container section d-flex justify-content-center align-items-center text-center pages-container "
        id="simbol"
      >
        <img src="images/logo.png" />
      </div>
      <div
        className="container section d-flex justify-content-center align-items-center text-center pages-container py-5"
        id="intro"
      >
        <div className="mt-5 mt-md-0">
          <h1 className="title-introducao">DIA ZERO</h1>
          <h1 className="text-orange sub-title-intro">00.00.00</h1>
          <p className="main-text">
            É um trabalho de conclusão de curso do curso design digital da
            anhembi morumbi.
            <br />
            <br />
            O objetivo do projeto é ser uma campanha digital que pretende tocar
            no assunto do descarte incorreto de smartphones que acabam virando
            um lixo muito prejudicial para o nosso planeta.
            <br />
            <br />O principal meio de comunicação da campanha são videos de
            curta duração animados.
          </p>
        </div>
      </div>
      <div className="videos-container">
        <Video title="PILOTO" />
        <Video title="VIDEO 2" />
        <Video title="VIDEO 3" />
      </div>
      <div
        className="container section d-flex flex-wrap justify-content-center align-items-around text-center mt-5 pages-container py-5"
        id="choices-1"
      >
        <div className="col-12">
          <img src="images/logo.png" />
        </div>

        <div className="col-12 ">
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
          <a href="#inicio" className="col-12 col-md-4">
            <h1 className="choices-text">
              NÃO, VALEU<span className="text-orange">.</span>
            </h1>
          </a>
        </div>
      </div>

      <div
        className="container section d-flex flex-wrap justify-content-center align-items-around text-center mt-5 pages-container py-5"
        id="choices-2"
        style={{ overflowY: "hidden" }}
      >
        <div className="col-12">
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
      </div>
    </div>
  );
}
