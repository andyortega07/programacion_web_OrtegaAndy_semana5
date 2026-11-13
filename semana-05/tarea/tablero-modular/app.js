import { agregarTarea, moverTarea, eliminarTarea } from "./js/estado.js";
import { render } from "./js/render.js";

const formulario = document.querySelector("#formulario");
const campoTarea = document.querySelector("#tarea");
const tablero = document.querySelector("#tablero");

const acciones = {
  mover(id, direccion) {
    moverTarea(id, direccion);
    render(tablero, acciones);
  },
  eliminar(id) {
    eliminarTarea(id);
    render(tablero, acciones);
  },
};

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  if (!agregarTarea(campoTarea.value)) return;

  formulario.reset();
  campoTarea.focus();
  render(tablero, acciones);
});

render(tablero, acciones);
