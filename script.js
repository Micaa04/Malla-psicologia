const materias = [
  { nombre: "Fundamentos de la Psicología", semestre: 1, previaturas: "Sin previaturas" },
  { nombre: "Neurobiología de la mente", semestre: 1, previaturas: "Sin previaturas" },
  { nombre: "Inicio a la formación en Psicología", semestre: 1, previaturas: "Sin previaturas" },
  { nombre: "Epistemología", semestre: 1, previaturas: "Sin previaturas" },
  { nombre: "Teorías Psicológicas", semestre: 2, previaturas: "Fundamentos de la Psicología" },
  { nombre: "Procesos Cognitivos", semestre: 2, previaturas: "Neurobiología de la mente" },
  { nombre: "Psicología del Desarrollo", semestre: 2, previaturas: "Fundamentos de la Psicología" },
  { nombre: "Herramientas para el trabajo intelectual", semestre: 2, previaturas: "Sin previaturas" },
  { nombre: "Metodología General de la Investigación", semestre: 2, previaturas: "Epistemología" },
  { nombre: "Entrevista Psicológica", semestre: 2, previaturas: "Inicio a la formación en Psicología" },
  { nombre: "Articulación de Saberes I", semestre: 2, previaturas: "Sin previaturas" },
  { nombre: "Psicología Social", semestre: 3, previaturas: "Teorías Psicológicas, Fundamentos de la Psicología, Art. Saberes I" },
  { nombre: "Ética y Deontología", semestre: 3, previaturas: "Sin previaturas" },
  { nombre: "MAS III: Clínica y Subjetividad", semestre: 3, previaturas: "Sin previaturas" },
  { nombre: "Técnicas Cuantitativas y Cualitativas", semestre: 3, previaturas: "Teorías Psicológicas, Procesos Cognitivos, Psicología del Desarrollo, Art. Saberes I" },
  { nombre: "Articulación de Saberes II", semestre: 3, previaturas: "Art. Saberes I" },
  { nombre: "Clínica I: Fundamentos Psicoanalíticos", semestre: 4, previaturas: "Psicología Social, Fundamentos, Teorías Psicológicas, Art. Saberes I" },
  { nombre: "Psicología y Salud", semestre: 4, previaturas: "Psicología del Desarrollo, Fundamentos" },
  { nombre: "Herramientas de la Psicología Clínica", semestre: 4, previaturas: "Clínica I" },
  { nombre: "Herramientas de la Psicología Social", semestre: 4, previaturas: "Psicología Social, Art. Saberes I, Teorías Psicológicas, Fundamentos" },
  { nombre: "Diseño de Proyectos", semestre: 4, previaturas: "Sin previaturas" },
  { nombre: "MAS IV: Estado, Sociedad y Políticas Públicas", semestre: 4, previaturas: "Teorías Psicológicas, Fundamentos, Art. Saberes III, Ética, Epistemología" },
  { nombre: "Neuropsicología", semestre: 5, previaturas: "Procesos Cognitivos, Neurobiología de la mente" },
  { nombre: "Clínica II: Teorías y Técnicas de las Intervenciones", semestre: 5, previaturas: "Clínica I, Entrevista Psicológica" },
  { nombre: "Psicopatología de adultos", semestre: 5, previaturas: "Clínica I" },
  { nombre: "MAS V: Psicología social y lo colectivo", semestre: 5, previaturas: "Psicología Social, Art. Saberes I, Fundamentos" },
  { nombre: "Psicología y Educación", semestre: 5, previaturas: "Psicología Sujeto y Aprendizaje, Procesos Cognitivos, Neurobiología, Psicología del Desarrollo, Fundamentos" },
  { nombre: "Dispositivos Psicoterapéuticos", semestre: 6, previaturas: "Clínica II" },
  { nombre: "Psicopatología de niños y adolescentes", semestre: 6, previaturas: "Clínica I" },
  { nombre: "Problemáticas contemporáneas de la Psicología Social", semestre: 6, previaturas: "Psicología Social, MAS V" },
  { nombre: "Articulación de Saberes VI", semestre: 6, previaturas: "Clínica I, Entrevista Psicológica" },
  { nombre: "Construcción de Itinerario", semestre: 7, previaturas: "Ciclo Inicial e Integral completos" },
  { nombre: "Práctica de Ciclo Integral", semestre: 7, previaturas: "Sin previaturas" },
  { nombre: "Optativas del Ciclo de Graduación", semestre: 7, previaturas: "Sin previaturas" },
  { nombre: "Trabajo Final de Grado (TFG)", semestre: 8, previaturas: "Toda la malla acreditada" }
];

const container = document.getElementById("malla-container");

materias.forEach(m => {
  const div = document.createElement("div");
  div.className = "materia";
  div.innerHTML = `
    <strong>${m.nombre}</strong><br>
    <em>Semestre ${m.semestre}</em>
    <div class="detalle"><strong>Previaturas:</strong><br>${m.previaturas}</div>
  `;
  container.appendChild(div);
});
