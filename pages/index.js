import Video from "../components/Video";

export default function Home() {
  return (
    <div className="bg-black">
      <div
        className="container section d-flex justify-content-center align-items-center text-center"
        id="inicio"
      >
        <div className="">
          <h1 className="text-orange main-title">BEM VINDO AO</h1>
          <h1 className="main-title-name">DIA ZERO</h1>
          <h1 className="text-orange main-title">00.00.00</h1>
        </div>
      </div>
      <div className="container section d-flex justify-content-center align-items-center text-center">
        <img src="images/logo.png" />
      </div>
      <div className="container section d-flex justify-content-center align-items-center text-center">
        <div className="">
          <h1 className="main-title">DIA ZERO</h1>
          <h1 className="text-orange main-title">00.00.00</h1>
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
      <Video title="PILOTO" />
      <Video title="VIDEO 2" />
      <Video title="VIDEO 3" />
      <div
        className="container section d-flex flex-wrap justify-content-center align-items-around text-center mt-5"
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
        className="container section d-flex flex-wrap justify-content-center align-items-around text-center mt-5"
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
          <a href="#rascunhos" className="col-12 col-md-4">
            <h1 className="choices-text text-center">RASCUNHOS</h1>
          </a>
          <a href="#integrantes" className="col-12 col-md-4">
            <h1 className="choices-text text-center">INTEGRANTES</h1>
          </a>
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

      <div
        className="container section"
        id="rascunhos"
        style={{ overflowY: "hidden" }}
      >
        <div className="row mb-3 align-items-center justify-content-around">
          <div className="col-6 col-md-11">
            <h1 className="main-title">RASCUNHOS</h1>
          </div>

          <div className="col-6 col-md-1 d-flex justify-content-end">
            <a href="#choices-2">
              <img src="images/back.png" className="float-right" />
            </a>
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

      <div
        className="container section py-4"
        id="integrantes"
        style={{ overflowY: "hidden" }}
      >
        <div className="row mb-3 align-items-center justify-content-around">
          <div className="col-6 col-md-11">
            <h1 className="main-title">INTEGRANTES</h1>
          </div>

          <div className="col-6 col-md-1 d-flex justify-content-end">
            <a href="#choices-2">
              <img src="images/back.png" className="float-right" />
            </a>
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
    </div>
  );
}
