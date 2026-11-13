import { columnas, tareasPorColumna } from "./estado.js";
import { crearColumna } from "./componentes.js";

export function render(tablero, acciones) {
  const secciones = columnas.map((nombre, indice) =>
    crearColumna(nombre, tareasPorColumna(indice), acciones, columnas.length - 1),
  );
  tablero.replaceChildren(...secciones);
}
