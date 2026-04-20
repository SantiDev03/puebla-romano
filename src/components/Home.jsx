import bannerok from "../assets/bannerok.jpg";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <h1 className="titulo">BARBERÍA LOS SANTI'S</h1>

      <p className="descripcion">
        Surgió como una idea en el aire, y con el tiempo, esfuerzo y dedicación
        fuimos construyendo este proyecto que hoy es una barbería pensada para
        vos. Buscamos brindar no solo un buen corte, sino un espacio donde
        puedas relajarte, sentirte cómodo y salir con la mejor versión de vos
        mismo.
      </p>

      <img className="banner" src={bannerok} alt="Banner barbería" />
    </div>
  );
}

export default Home;
