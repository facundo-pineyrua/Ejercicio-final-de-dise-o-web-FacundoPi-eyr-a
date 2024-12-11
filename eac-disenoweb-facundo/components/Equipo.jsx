function Equipo({ nombreEquipo, year, nombreEstadio, urlEquipo }) {
    return (
      <div>
        <p>Nombre equipo: {nombreEquipo || "Desconocido"}</p>
        <p>Año de fundación: {year || "Desconocido"}</p>
        <p>Nombre del Estadio: {nombreEstadio || "Desconocido"}</p>
        <img src={urlEquipo}></img>
      </div>
    );
  }
  
  export { Equipo };