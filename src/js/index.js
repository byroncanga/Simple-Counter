//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import "../img/back.jpg";
import "../styles/index.css";

let counter = 0;
setInterval(() => {
  counter += 1;
  const digitoUno = Math.floor((counter / 1) % 10);
  const digitoDos = Math.floor((counter / 10) % 10);
  const digitoTres = Math.floor((counter / 100) % 10);
  const digitoCuatro = Math.floor((counter / 1000) % 10);
  const digitoCinco = Math.floor((counter / 10000) % 10);
  const digitoSeis = Math.floor((counter / 100000) % 10);

  ReactDOM.render(
    <div className="contenedor vh-100 d-flex flex-column gap-2 justify-content-center align-items-center">
      <h1 className=" display-2">Simple Counter</h1>
      <div className="container d-flex gap-2 p-5 rounded-4 justify-content-center fondo">
        <div className=" bg-dark text-light p-3 rounded-2 fw-bold border display-2">
          <i class="bi bi-clock-history"></i>
        </div>
        <div className="box-Counter text-light  rounded-2 fw-bold display-2">
          {digitoSeis}
        </div>
        <div className="box-Counter text-light  rounded-2 fw-bold  display-2">
          {digitoCinco}
        </div>
        <div className="box-Counter text-light  rounded-2 fw-bold  display-2">
          {digitoCuatro}
        </div>
        <div className="box-Counter text-light  rounded-2 fw-bold  display-2">
          {digitoTres}
        </div>
        <div className="box-Counter text-light  rounded-2 fw-bold  display-2">
          {digitoDos}
        </div>
        <div className="box-Counter text-light  rounded-2 fw-bold  display-2">
          {digitoUno}
        </div>
      </div>
    </div>,
    document.querySelector("#app")
  );
}, 10);
