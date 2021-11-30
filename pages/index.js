import Video from "../components/Video";
import Link from "next/link";
import Dots from "../components/Dots";

import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

export default function Home() {
  return (
    <div className="bg-black">
      <Dots />
      <div
        className="container section d-flex flex-wrap justify-content-center align-items-center text-center "
        id="inicio"
      >
        <div className="">
          <h1 className="text-orange main-title">BEM VINDO AO</h1>
          <h1 className="main-title-name">DIA ZERO</h1>
          <h1 className="text-orange main-title">00.00.00</h1>
        </div>

        <div className="w-100 d-flex justify-content-around mobile-scroll">
          <Link href="#simbol">
            <a className="d-block">
              <AiOutlineDown size={30} />
            </a>
          </Link>
        </div>
      </div>
      <div
        className="container section d-flex flex-wrap justify-content-center align-items-center text-center "
        id="simbol"
      >
        <div className="w-100 d-flex justify-content-center">
          <img src="images/logo.png" />
        </div>

        <div className="w-100 d-flex justify-content-center mobile-scroll">
          <Link href="#inicio">
            <a className="d-block">
              <AiOutlineUp size={30} />
            </a>
          </Link>
          <Link href="#intro">
            <a className="d-block" style={{ marginLeft: 40 }}>
              <AiOutlineDown size={30} />
            </a>
          </Link>
        </div>
      </div>
      <div
        className="container section d-flex flex-wrap justify-content-center align-items-center text-center videos-container"
        id="intro"
      >
        <div className="">
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

        <div className="w-100 d-flex justify-content-center mobile-scroll">
          <Link href="#simbol">
            <a className="d-block">
              <AiOutlineUp size={30} />
            </a>
          </Link>
          <Link href="/videos#videos">
            <a className="d-block" style={{ marginLeft: 40 }}>
              <AiOutlineDown size={30} />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
