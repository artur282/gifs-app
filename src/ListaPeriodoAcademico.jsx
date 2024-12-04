import React, { useState } from "react";
import "./PeriodosLista.css"; // Asegúrate de crear este archivo CSS

const Periodos = () => {
  const [periodos, setPeriodos] = useState([
    { numero: 1, estado: "activo" },
    { numero: 2, estado: "inactivo" },
    { numero: 3, estado: "activo" },
    { numero: 12, estado: "activo" },
    { numero: 22, estado: "inactivo" },
    { numero: 32, estado: "activo" },
    { numero: 13, estado: "activo" },
    { numero: 23, estado: "inactivo" },
    { numero: 33, estado: "activo" },
    { numero: 14, estado: "activo" },
    { numero: 24, estado: "inactivo" },
    { numero: 34, estado: "activo" },
    { numero: 15, estado: "activo" },
    { numero: 25, estado: "inactivo" },
    { numero: 35, estado: "activo" },
    { numero: 16, estado: "activo" },
    { numero: 27, estado: "inactivo" },
    { numero: 37, estado: "activo" },
    { numero: 18, estado: "activo" },
    { numero: 29, estado: "inactivo" },
    { numero: 38, estado: "activo" },
    { numero: 10, estado: "activo" },
    { numero: 20, estado: "inactivo" },
    { numero: 32, estado: "activo" },
  ]);

  const [numeroBuscado, setNumeroBuscado] = useState("");
  const [resultados, setResultados] = useState(periodos);

  const cambiarEstado = (numero) => {
    const nuevosPeriodos = periodos.map((periodo) =>
      periodo.numero === numero
        ? {
            ...periodo,
            estado: periodo.estado === "activo" ? "inactivo" : "activo",
          }
        : periodo
    );

    setPeriodos(nuevosPeriodos);

    // Actualiza resultados si hay una búsqueda activa
    if (numeroBuscado) {
      const resultadosFiltrados = nuevosPeriodos.filter(
        (periodo) => periodo.numero === parseInt(numeroBuscado)
      );
      setResultados(resultadosFiltrados);
    } else {
      setResultados(nuevosPeriodos); // Si no hay búsqueda, mostrar todos
    }
  };

  const eliminarPeriodo = (numero) => {
    const nuevosPeriodos = periodos.filter(
      (periodo) => periodo.numero !== numero
    );
    setPeriodos(nuevosPeriodos);
    // Actualiza los resultados después de eliminar
      setResultados(nuevosPeriodos);
      setNumeroBuscado('')
  };

  const buscarPeriodo = (e) => {
    e.preventDefault();
    const numero = parseInt(numeroBuscado);
    if (!isNaN(numero)) {
      const resultadosFiltrados = periodos.filter(
        (periodo) => periodo.numero === numero
      );
      setResultados(resultadosFiltrados);
    } else {
      setResultados(periodos); // Si no es un número, mostrar todos
    }
  };

  return (
    <div className="tabla-container">
      <form onSubmit={buscarPeriodo} className="form-busqueda">
        <input
          type="number"
          value={numeroBuscado}
          onChange={(e) => setNumeroBuscado(e.target.value)}
          placeholder="Buscar por número"
          className="input-busqueda"
        />
        <button type="submit" className="boton-busqueda">
          Buscar
        </button>
      </form>

      <table className="tabla-periodos">
        <thead>
          <tr>
            <th>Periodo</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {resultados.map((periodo, index) => (
            <tr key={index}>
              <td>{periodo.numero}</td>
              <td>{periodo.estado}</td>
              <td>
                <button onClick={() => cambiarEstado(periodo.numero)}>
                  Cambiar Estado
                </button>
                <button onClick={() => eliminarPeriodo(periodo.numero)}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Periodos;
