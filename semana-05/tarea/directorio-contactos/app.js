const contactos = [
  { nombre: "Ana Pérez", carrera: "Desarrollo de Software", correo: "ana@example.com" },
  { nombre: "Luis León", carrera: "Diseño Gráfico", correo: "luis@example.com" },
  { nombre: "María Torres", carrera: "Contabilidad", correo: "maria@example.com" },
  { nombre: "David Mora", carrera: "Desarrollo de Software", correo: "david@example.com" },
  { nombre: "Sofía Vega", carrera: "Administración", correo: "sofia@example.com" },
  { nombre: "Pablo Ruiz", carrera: "Diseño Gráfico", correo: "pablo@example.com" },
  { nombre: "Elena Arias", carrera: "Desarrollo de Software", correo: "elena@example.com" },
  { nombre: "Mateo Salas", carrera: "Marketing", correo: "mateo@example.com" },
];

const buscador = document.querySelector("#buscar");
const lista = document.querySelector("#contactos");
const contador = document.querySelector("#contador");
const sinResultados = document.querySelector("#sin-resultados");

function normalizar(texto) {
  return texto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function crearTarjeta(contacto) {
  const tarjeta = document.createElement("article");
  const nombre = document.createElement("h2");
  const carrera = document.createElement("p");
  const correo = document.createElement("a");
  nombre.textContent = contacto.nombre;
  carrera.textContent = contacto.carrera;
  correo.textContent = contacto.correo;
  correo.href = "mailto:" + contacto.correo;
  tarjeta.append(nombre, carrera, correo);
  return tarjeta;
}

function render() {
  const consulta = normalizar(buscador.value.trim());
  const visibles = contactos.filter(({ nombre, carrera, correo }) =>
    normalizar(nombre + " " + carrera + " " + correo).includes(consulta),
  );
  lista.replaceChildren(...visibles.map(crearTarjeta));
  contador.textContent = "Mostrando " + visibles.length + " de " + contactos.length;
  sinResultados.hidden = visibles.length > 0;
}

buscador.addEventListener("input", render);
render();
