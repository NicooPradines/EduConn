const text = "Es una plataforma educativa en línea que utiliza tecnología avanzada e inteligencia artificial para ofrecer una experiencia de aprendizaje flexible y personalizada. La misión de EduConn es democratizar el acceso a la educación de calidad, conectando a estudiantes y profesionales con expertos en diversas áreas, desde materias académicas hasta habilidades técnicas especializadas.";
let index = 0;

function typeWriter() {
  if (index < text.length) {
    document.getElementById("typing-text").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 50); // Ajusta el tiempo para la velocidad del efecto
  }
}

window.onload = typeWriter;