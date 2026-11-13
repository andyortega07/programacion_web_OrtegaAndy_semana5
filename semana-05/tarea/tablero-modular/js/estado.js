export const columnas = Object.freeze(["Pendiente", "En curso", "Hecho"]);

const tareas = [];
let siguienteId = 1;

export function agregarTarea(texto) {
  const titulo = texto.trim();
  if (!titulo) return false;

  tareas.push({ id: siguienteId++, titulo, columna: 0 });
  return true;
}

export function moverTarea(id, direccion) {
  const tarea = tareas.find((item) => item.id === id);
  if (!tarea || ![-1, 1].includes(direccion)) return;

  const destino = tarea.columna + direccion;
  if (destino >= 0 && destino < columnas.length) tarea.columna = destino;
}

export function eliminarTarea(id) {
  const indice = tareas.findIndex((item) => item.id === id);
  if (indice !== -1) tareas.splice(indice, 1);
}

export function tareasPorColumna(columna) {
  return tareas.filter((tarea) => tarea.columna === columna);
}
