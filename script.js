const materiasPorSemestre = [
  {
    nombre: "1er semestre",
    materias: [
      "Inicio a la Formación en Psicología",
      "Historia de la Psicología",
      "Fundamentos de la Psicología",
      "Neurobiología de la Mente",
      "Articulación de Saberes I",
      "Epistemología",
      "Herramientas para el Trabajo Intelectual"
    ]
  },
  {
    nombre: "2do semestre",
    materias: [
      "Psicología del Desarrollo",
      "Procesos Cognitivos",
      "Metodologías y Herramientas orientadas a la Extensión",
      "Metodología General de la Investigación",
      "Entrevista Psicológica",
      "Articulación de Saberes II",
      "Referencial II: Formación Integral"
    ]
  },
  {
    nombre: "3er semestre",
    materias: [
      "Psicología Social",
      "Psicología Sujeto y Aprendizaje",
      "Ética y Deontología",
      "Métodos y Técnicas Cualitativas",
      "Articulación de Saberes III"
    ]
  },
  {
    nombre: "4to semestre",
    materias: [
      "Clínica I: Fundamentos Psicoanalíticos",
      "Psicología y Salud",
      "Herramientas de la Psicología Clínica",
      "Técnicas Cuantitativas",
      "Herramientas de la Psicología Social",
      "Diseño de Proyectos",
      "Articulación de Saberes IV"
    ]
  },
  {
    nombre: "5to semestre",
    materias: [
      "Psicopatología de niños y adolescentes",
      "Psicopatología de adultos",
      "Neuropsicología",
      "Clínica II: Teorías y Técnicas de las Intervenciones",
      "Articulación de Saberes V",
      "Construcción de Itinerario",
      "Proyectos",
      "Práctica de Ciclo de Formación Integral"
    ]
  },
  {
    nombre: "6to semestre",
    materias: [
      "Problemáticas contemporáneas de la Psicología Social",
      "Psicología y Educación",
      "Dispositivos Psicoterapéuticos",
      "Articulación de Saberes VI"
    ]
  },
  {
    nombre: "7mo y 8vo semestre",
    materias: [
      "Referencial de Egreso",
      "Optativas del Ciclo de Graduación",
      "Práctica de Graduación",
      "Idiomas",
      "Tutoría",
      "Defensa"
    ]
  }
];

const previaturas = {
  "Clínica I: Fundamentos Psicoanalíticos": ["Articulación de Saberes II", "Teorías Psicológicas", "Fundamentos de la Psicología", "Ética y Deontología", "Epistemología"],
  "Psicología y Salud": ["Psicología del Desarrollo", "Fundamentos de la Psicología", "Articulación de Saberes II"],
  "Herramientas de la Psicología Clínica": ["Entrevista Psicológica", "Inicio a la Formación en Psicología", "Articulación de Saberes III", "Teorías Psicológicas", "Fundamentos de la Psicología"],
  "Técnicas Cuantitativas": ["Herramientas para el Trabajo Intelectual", "Metodología General de la Investigación", "Epistemología"],
  "Herramientas de la Psicología Social": ["Psicología Social", "Teorías Psicológicas", "Fundamentos de la Psicología", "Articulación de Saberes I"],
  "Diseño de Proyectos": ["Metodología General de la Investigación", "Epistemología", "Métodos y Técnicas Cualitativas", "Herramientas para el Trabajo Intelectual"],
  "Articulación de Saberes IV": ["Psicología Social", "Articulación de Saberes I", "Teorías Psicológicas", "Fundamentos de la Psicología", "Articulación de Saberes II"],
  "Psicopatología de niños y adolescentes": ["Entrevista Psicológica", "Inicio a la Formación en Psicología", "Clínica I: Fundamentos Psicoanalíticos"],
  "Psicopatología de adultos": ["Entrevista Psicológica", "Inicio a la Formación en Psicología", "Clínica I: Fundamentos Psicoanalíticos"],
  "Neuropsicología": ["Procesos Cognitivos", "Neurobiología de la Mente"],
  "Clínica II: Teorías y Técnicas de las Intervenciones": ["Herramientas de la Psicología Clínica", "Clínica I: Fundamentos Psicoanalíticos"],
  "Articulación de Saberes V": ["Herramientas de la Psicología Social", "Articulación de Saberes IV"],
  "Construcción de Itinerario": ["Psicología Social", "Articulación de Saberes I", "Teorías Psicológicas", "Fundamentos de la Psicología", "Psicología Sujeto y Aprendizaje", "Procesos Cognitivos", "Neurobiología de la Mente", "Psicología del Desarrollo", "Clínica I: Fundamentos Psicoanalíticos"],
  "Proyectos": ["Ciclo Inicial completo", "Diseño de Proyectos"],
  "Práctica de Ciclo de Formación Integral": ["Ciclo Inicial completo", "Ética y Deontología", "Psicología y Salud", "Psicología Sujeto y Aprendizaje", "Clínica I: Fundamentos Psicoanalíticos", "Herramientas de la Psicología Clínica", "Herramientas de la Psicología Social"],
  "Problemáticas contemporáneas de la Psicología Social": ["Psicología Social", "Articulación de Saberes V"],
  "Psicología y Educación": ["Psicología Sujeto y Aprendizaje", "Procesos Cognitivos", "Neurobiología de la Mente", "Psicología del Desarrollo", "Fundamentos de la Psicología"],
  "Dispositivos Psicoterapéuticos": ["Clínica II: Teorías y Técnicas de las Intervenciones"],
  "Articulación de Saberes VI": ["Articulación de Saberes I", "Articulación de Saberes II", "Articulación de Saberes III", "Teorías Psicológicas", "Fundamentos de la Psicología"],
  "Referencial de Egreso": ["Ciclo Inicial completo", "Ciclo de Formación Integral completo", "Práctica de Ciclo de Formación Integral", "Proyectos"],
  "Optativas del Ciclo de Graduación": ["Ciclo Inicial completo", "Ética y Deontología", "Psicología Sujeto y Aprendizaje", "Psicología y Salud", "Clínica I: Fundamentos Psicoanalíticos", "Herramientas de la Psicología Clínica", "Herramientas de la Psicología Social"],
  "Práctica de Graduación": ["Práctica de Ciclo de Formación Integral"],
  "Tutoría": ["Ciclo Inicial completo", "Ciclo Integral completo", "Prácticas y Proyectos"],
  "Defensa": ["Toda la malla curricular acreditada"]
};

const container = document.getElementById("malla-container");
const completadas = new Set(JSON.parse(localStorage.getItem("completadas") || "[]"));

function guardarEstado() {
  localStorage.setItem("completadas", JSON.stringify(Array.from(completadas)));
}

function crearMateria(nombre) {
  const div = document.createElement("div");
  div.className = "materia";
  div.textContent = nombre;

  if (completadas.has(nombre)) div.classList.add("completed");

  const deps = previaturas[nombre];
  const locked = deps && !deps.every(dep => completadas.has(dep));

  if (locked) div.classList.add("locked");

  div.addEventListener("click", () => {
    if (locked) return;
    if (completadas.has(nombre)) completadas.delete(nombre);
    else completadas.add(nombre);
    guardarEstado();
    location.reload();
  });

  return div;
}

materiasPorSemestre.forEach(semestre => {
  const col = document.createElement("div");
  col.className = "semestre";
  const title = document.createElement("h2");
  title.textContent = semestre.nombre;
  col.appendChild(title);
  semestre.materias.forEach(materia => col.appendChild(crearMateria(materia)));
  container.appendChild(col);
});

