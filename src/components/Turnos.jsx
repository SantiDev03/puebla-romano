import { useState, useEffect } from "react";
import "./Turnos.css";

function Turnos() {
  const [turnos, setTurnos] = useState([]);

  const [nombre, setNombre] = useState("");
  const [servicio, setServicio] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");

  useEffect(() => {
    const guardados = JSON.parse(localStorage.getItem("turnos")) || [];
    setTurnos(guardados);
  }, []);

  useEffect(() => {
    localStorage.setItem("turnos", JSON.stringify(turnos));
  }, [turnos]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const nuevoTurno = {
      nombre,
      servicio,
      fecha,
      hora,
    };

    setTurnos([...turnos, nuevoTurno]);

    setNombre("");
    setServicio("");
    setFecha("");
    setHora("");
  };

  return (
    <div>
      <h1>Turnos</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <select value={servicio} onChange={(e) => setServicio(e.target.value)}>
          <option value="">Servicio</option>
          <option value="corte">Corte</option>
          <option value="barba">Barba</option>
          <option value="barba">Color</option>
        </select>

        <input
          type="date"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
        />

        <input
          type="time"
          value={hora}
          onChange={(e) => setHora(e.target.value)}
        />

        <button type="submit">Reservar</button>
      </form>

      <h2>Turnos Reservados</h2>

      <ul>
        {turnos.map((t, index) => (
          <li key={index}>
            {t.nombre} - {t.servicio} - {t.fecha} - {t.hora}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Turnos;
