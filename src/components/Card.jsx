import React from "react";

function Card() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
      <section className="text-center mb-8">
        <h2 className="text-3xl font-bold">Nuestros Barberos</h2>
        <p className="mt-2">Santiago Romano - Master Barber</p>
        <p>Santiago Puebla - Style Expert</p>
      </section>
    </div>
  );
}
export default Card;
