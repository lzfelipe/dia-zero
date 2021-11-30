export default function Video(props) {
  return (
    <div
      className="container section d-flex justify-content-center align-items-center text-center py-5"
      id="videos"
    >
      <div className="">
        <h1 className="videos-text mb-5">{props.title}</h1>
        {props.title == "PILOTO" ? (
          <iframe
            src="https://www.youtube.com/embed/gVuF0tziRZQ"
            style={{ width: "60vw", height: "30vw" }}
          />
        ) : (
          <h1 className="videos-text text-orange">EM BREVE</h1>
        )}

        {props.title == "PILOTO" ? (
          <>
            <h2 className="my-5">
              Esse vídeo tem apenas 3 minutos ou alguns anos?
            </h2>
            <p>Quer saber um pouco mais?</p>
            <a
              className="btn btn-video"
              href="https://brasil.elpais.com/brasil/2018/11/09/tecnologia/1541771036_210342.html"
              target="_blank"
              rel="noreferrer"
            >
              CLIQUE AQUI
            </a>
          </>
        ) : null}
      </div>
    </div>
  );
}
