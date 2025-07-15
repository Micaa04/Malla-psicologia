const materias = [
  { nombre: "Inicio a la Formación en Psicología", semestre: 1, id: "inicio" },
  { nombre: "Historia de la Psicología", semestre: 1, id: "historia" },
  { nombre: "Fundamentos de la Psicología", semestre: 1, id: "fundamentos" },
  { nombre: "Neurobiología de la Mente", semestre: 1, id: "neurobio" },
  { nombre: "Articulación de Saberes I", semestre: 1, id: "art1" },
  { nombre: "Epistemología", semestre: 1, id: "epist" },
  { nombre: "Herramientas para el Trabajo Intelectual", semestre: 1, id: "herr_int" },

  { nombre: "Psicología del desarrollo", semestre: 2, id: "desarrollo", req: ["fundamentos"] },
  { nombre: "Procesos Cognitivos", semestre: 2, id: "cognitivos", req: ["neurobio"] },
  { nombre: "Metodologías orientadas a la Extensión", semestre: 2, id: "extension" },
  { nombre: "Metodología General de la Investigación", semestre: 2, id: "met_gen", req: ["epist"] },
  { nombre: "Entrevista Psicológica", semestre: 2, id: "entrevista", req: ["inicio"] },
  { nombre: "Articulación de Saberes II", semestre: 2, id: "art2" },
  { nombre: "Referencial II: Formación integral", semestre: 2, id: "referencial2" },

  { nombre: "Psicología Social", semestre: 3, id: "social" },
  { nombre: "Psicología Sujeto y Aprendizaje", semestre: 3, id: "sujeto" },
  { nombre: "Ética y Deontología", semestre: 3, id: "etica" },
  { nombre: "Métodos y Técnicas Cualitativas", semestre: 3, id: "mtc" },
  { nombre: "Articulación de Saberes III", semestre: 3, id: "art3" }
];

function render() {
  const container = document.getElementById("malla-container");
  container.innerHTML = "";
  const completed = JSON.parse(localStorage.getItem("materias_aprobadas") || "[]");

  for (let semestre = 1; semestre <= 3; semestre++) {
    const semestreDiv = document.createElement("div");
    semestreDiv.className = "semestre";
    semestreDiv.innerHTML = `<h2>Semestre ${semestre}</h2>`;

    materias
      .filter(m => m.semestre === semestre)
      .forEach(m => {
        const isUnlocked = !m.req || m.req.every(r => completed.includes(r));
        const isCompleted = completed.includes(m.id);

        const materiaDiv = document.createElement("div");
        materiaDiv.className = "materia";
        if (!isUnlocked) materiaDiv.classList.add("bloqueada");
        if (isCompleted) materiaDiv.classList.add("aprobada");

        materiaDiv.innerHTML = `
          <label>
            <input type="checkbox" ${isCompleted ? "checked" : ""} ${!isUnlocked ? "disabled" : ""} onchange="toggleMateria('${m.id}')">
            ${m.nombre}
          </label>
        `;
        semestreDiv.appendChild(materiaDiv);
      });

    container.appendChild(semestreDiv);
  }
}

function toggleMateria(id) {
  let aprobadas = JSON.parse(localStorage.getItem("materias_aprobadas") || "[]");
  if (aprobadas.includes(id)) {
    aprobadas = aprobadas.filter(x => x !== id);
  } else {
    aprobadas.push(id);
  }
  localStorage.setItem("materias_aprobadas", JSON.stringify(aprobadas));
  render();
}

window.onload = render;
