import Home from "./components/Home";
import Turnos from "./components/Turnos";
import Barber from "./components/Barber";
import Card from "./components/Card";
import Servicios from "./components/Servicios";
import "./App.css";

function App() {
  return (
    <>
      <Home />
      <Turnos />
      <Barber />
      <main>
        <Servicios />
        <Card />
      </main>
    </>
  );
}

export default App;
