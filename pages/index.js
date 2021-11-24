import Video from "../components/Video";

export default function Home() {
  return (
    <div className="bg-black">
    <div className="container section d-flex justify-content-center align-items-center text-center" id="inicio">
        <div className="">
          <h1 className="text-orange main-title">BEM VINDO AO</h1>
          <h1 className="main-title-name">DIA ZERO</h1>
          <h1 className="text-orange main-title">00.00.00</h1>
        </div>
    </div>
    <div className="container section d-flex justify-content-center align-items-center text-center">
        <img src="images/logo.png"/>
    </div>
    <div className="container section d-flex justify-content-center align-items-center text-center">
        <div className="">
          <h1 className="main-title">DIA ZERO</h1>
          <h1 className="text-orange main-title">00.00.00</h1>
          <p className="main-text">
          É um trabalho de conclusão de curso do curso design digital da anhembi morumbi.
          <br />
          <br />
          O objetivo do projeto é ser uma campanha digital que pretende tocar no assunto do
          descarte incorreto de smartphones que acabam virando um lixo muito prejudicial para o nosso planeta.
          <br />
          <br />
          O principal meio de comunicação da campanha são videos de curta duração animados.
          </p>
        </div>
    </div>
    <Video title="PILOTO"/>
    <Video title="VIDEO 2"/>
    <Video title="VIDEO 3"/>
    <div className="container section d-flex flex-wrap justify-content-center align-items-around text-center mt-5" id="choices-1">
      
        <div className="col-12">
          <img src="images/logo.png"/>
        </div>

        <div className="col-12 ">
        <h1 className="secondary-title">QUER VER UM POUCO POR TRÁS DO PROJETO<span className="text-orange">?</span></h1>
        </div>

        <div className="col-12 d-flex justify-content-between">
          <a href="#choices-2"><h1 className="choices-text">SIMM<span className="text-orange">!</span></h1></a>
          <a href="#choices-2"><h1 className="choices-text">AH VEJO, JÁ TO AQUI<span className="text-orange">...</span></h1></a>
          <a href="#inicio"><h1 className="choices-text">NÃO, VALEU<span className="text-orange">.</span></h1></a>
        </div>
    
    </div>

    <div className="container section d-flex flex-wrap justify-content-center align-items-around text-center mt-5" id="choices-2">
      
        <div className="col-12">
          <img src="images/logo.png"/>
        </div>

        <div className="col-12 ">
        <h1 className="secondary-title">QUER VER UM POUCO POR TRÁS DO PROJETO<span className="text-orange">?</span></h1>
        </div>

        <div className="col-12 d-flex justify-content-between">
          <h1 className="choices-text text-center">RASCUNHOS</h1>
          <h1 className="choices-text text-center">INTEGRANTES</h1>
          <h1 className="choices-text text-center">MONOGRAFIA</h1>
        </div>
        <div className="col-12 d-flex justify-content-between">
          <a href="https://drive.google.com/file/d/14kySOVemQuiiCt0KKWgc1VLpDBb4z1qb/view?usp=sharing" target="_blank" rel="noreferrer"><h1 className="choices-text text-center"> BIBLÍA</h1></a>
          <a href="https://greeneletron.org.br/localizador" target="_blank" rel="noreferrer"><h1 className="choices-text text-center">RECICLE</h1></a>
          <h1 className="choices-text text-center">DESIGN KIT</h1>
        </div>
    
    </div>
   </div>
  )
}
