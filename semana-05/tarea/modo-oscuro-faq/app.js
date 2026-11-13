const tema = document.querySelector("#tema");
const lista = document.querySelector("#preguntas");

const preguntas = [
  ["¿Cómo busco un contacto?", "Escribe parte de su nombre, carrera o correo en el buscador del directorio."],
  ["¿Dónde aparece una tarea nueva?", "Toda tarea nueva aparece en la columna Pendiente."],
  ["¿Cómo cambio el estado de una tarea?", "Pulsa las flechas para moverla a la columna anterior o a la siguiente."],
  ["¿Cómo elimino una tarea?", "Pulsa el botón ✕ de la tarjeta que quieras eliminar."],
];

tema.addEventListener("click", () => {
  const oscuro = document.body.classList.toggle("oscuro");
  tema.textContent = oscuro ? "☀️ Modo claro" : "🌙 Modo oscuro";
  tema.setAttribute("aria-pressed", String(oscuro));
});

let abierta = null;

for (const [indice, [pregunta, respuesta]] of preguntas.entries()) {
  const grupo = document.createElement("section");
  const boton = document.createElement("button");
  const contenido = document.createElement("p");
  contenido.id = "respuesta-" + indice;
  contenido.textContent = respuesta;
  contenido.hidden = true;
  boton.type = "button";
  boton.textContent = pregunta;
  boton.setAttribute("aria-expanded", "false");
  boton.setAttribute("aria-controls", contenido.id);

  boton.addEventListener("click", () => {
    const mostrar = contenido.hidden;
    if (abierta) {
      abierta.contenido.hidden = true;
      abierta.boton.setAttribute("aria-expanded", "false");
    }
    contenido.hidden = !mostrar;
    boton.setAttribute("aria-expanded", String(mostrar));
    abierta = mostrar ? { contenido, boton } : null;
  });

  grupo.append(boton, contenido);
  lista.append(grupo);
}
