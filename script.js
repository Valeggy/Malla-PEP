const malla = [
 [6, 6], // Año 1
  [6, 6], // Año 2
  [6, 6], // Año 3
  [6, 6], // Año 4
  [3, 2]  // Año 5
];

const contenedor = document.getElementById("malla");

let contador = 1;
const ramos = {};

malla.forEach((anual, añoIndex) => {
  const añoDiv = document.createElement("div");
  añoDiv.className = "año";
  añoDiv.innerHTML = `<h2>Año ${añoIndex + 1}</h2>`;
  contenedor.appendChild(añoDiv);

  anual.forEach((cantidad, semestreIndex) => {
    const semestreDiv = document.createElement("div");
    semestreDiv.className = "semestre";
    añoDiv.appendChild(semestreDiv);

    for (let i = 0; i < cantidad; i++) {
      const ramoDiv = document.createElement("div");
      ramoDiv.className = "ramo";
      const ramoId = `Ramo ${contador}`;
      ramoDiv.textContent = ramoId;
      ramoDiv.id = ramoId;
      ramoDiv.onclick = () => completarRamo(ramoId);
      semestreDiv.appendChild(ramoDiv);

      // Guardamos el ramo
      ramos[ramoId] = {
        id: ramoId,
        elemento: ramoDiv,
        desbloquea: []
      };

      contador++;
    }
  });
});

ramos["Ramo 1"].desbloquea.push("Ramo 7");
ramos["Ramo 7"].elemento.classList.add("bloqueado");

function completarRamo(id) {
  const ramo = ramos[id];
  if (ramo.elemento.classList.contains("bloqueado") || ramo.elemento.classList.contains("tachado")) return;

  ramo.elemento.classList.add("
                              
    ramo.desbloquea.forEach(depId => {
    ramos[depId].elemento.classList.remove("bloqueado");
  });
