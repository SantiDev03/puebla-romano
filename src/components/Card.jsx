import React from 'react';

function Card() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">

      <section className="text-center mb-8">
        <h2 className="text-3xl font-bold">Nuestros Barberos</h2>
        <p className="mt-2">Santiago Romano - Master Barber</p>
        <p>Santiago Puebla - Style Expert</p>
      </section>

      <section className="bg-gray-900 p-6 rounded-xl w-full max-w-md shadow-lg">
        <h3 className="text-xl font-semibold mb-4">Reserva tu Turno</h3>

        <form className="flex flex-col gap-3">
          <input className="p-2 rounded text-black" type="text" placeholder="Tu Nombre" />
          <input className="p-2 rounded text-black" type="datetime-local" />
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold p-2 rounded">
            Agendar
          </button>
        </form>
      </section>

    </div>
  );
}
export default Card;