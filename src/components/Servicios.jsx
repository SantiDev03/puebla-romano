import React from "react";
import imgCorte from "../assets/cortemessi.png";
import imgBarba from "../assets/chumle.png";
import imgColor from "../assets/color.png";

function Servicios() {
  const listaServicios = [
    { id: 1, nombre: "CORTE", precio: "$8000us", foto: imgCorte },
    { id: 2, nombre: "BARBA PREMIUM", precio: "$300us", foto: imgBarba },
    { id: 3, nombre: "COLOR", precio: "$500us", foto: imgColor },
  ];

  return (
    <section
      className="seccion-servicios"
      style={{ textAlign: "center", color: "white", marginTop: "40px" }}
    >
      <h2
        style={{
          display: "inline-block",
          paddingBottom: "2px",
        }}
      >
        Nuestros Servicios
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "25px",
          flexWrap: "wrap",
          marginTop: "20px",
        }}
      >
        {listaServicios.map((s) => (
          <div
            key={s.id}
            className="counter"
            style={{
              width: "250px",
              padding: "0",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <img
              src={s.foto}
              alt={s.nombre}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                display: "block",
              }}
            />
            <div style={{ padding: "15px" }}>
              <h3 style={{ margin: "10px 0", color: "white" }}>{s.nombre}</h3>
              <p
                style={{
                  color: "#ffffff",
                  fontWeight: "bold",
                  fontSize: "1.2rem",
                  margin: "0",
                }}
              >
                {s.precio}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Servicios;
