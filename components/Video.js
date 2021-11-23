
export default function Video(props) {
    return (
    <div className="container section d-flex justify-content-center align-items-center text-center py-5">
        <div className="">
          <h1 className="main-title mb-5">{props.title}</h1>
          <iframe src="https://www.youtube.com/embed/kjsAz6uZZiU" style={{width: '70vw', height: '40vw'}} />  
          <h2 className="my-5">Esse vídeo tem apenas 30 seg ou alguns anos?</h2>  
          <p>Quer saber um pouco mais?</p> 
          <button className="btn btn-video">CLIQUE AQUI</button>
          
        </div>
    </div>
    )
  }
  