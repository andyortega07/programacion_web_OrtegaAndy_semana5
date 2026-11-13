function crearBoton(texto, etiqueta, accion, deshabilitado = false) {
  const boton = document.createElement("button");
  boton.type = "button";
  boton.textContent = texto;
  boton.setAttribute("aria-label", etiqueta);
  boton.disabled = deshabilitado;
  boton.addEventListener("click", accion);
  return boton;
}

function crearTarjeta(tarea, acciones, ultimaColumna) {
  const tarjeta = document.createElement("article");
  const titulo = document.createElement("p");
  titulo.textContent = tarea.titulo;
  const botones = document.createElement("div");
  botones.className = "acciones";
  botones.append(
    crearBoton("←", "Mover a la izquierda", () => acciones.mover(tarea.id, -1), tarea.columna === 0),
    crearBoton("→", "Mover a la derecha", () => acciones.mover(tarea.id, 1), tarea.columna === ultimaColumna),
    crearBoton("✕", "Eliminar tarea", () => acciones.eliminar(tarea.id)),
  );
  tarjeta.append(titulo, botones);
  return tarjeta;
}

export function crearColumna(nombre, tareas, acciones, ultimaColumna) {
  const columna = document.createElement("section");
  columna.className = "columna";
  const titulo = document.createElement("h2");
  titulo.textContent = nombre + " (" + tareas.length + ")";
  columna.append(titulo);
  for (const tarea of tareas) columna.append(crearTarjeta(tarea, acciones, ultimaColumna));
  return columna;
}
