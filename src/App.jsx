import Barber from "./components/Barber";
import Card from "./components/Card";
import Servicios from "./components/Servicios"; 
import "./App.css";

function App() {
  return (
    <>
      <Barber />
      <main>
        <Servicios /> 
        <Card />
      </main>
    </>
  );
}

export default App;