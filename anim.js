// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Oh, her eyes, her eyes", time: 12 },
  { text: "Make the stars look like they're not shining", time: 15 },
  { text: "Her hair, her hair", time: 18 },
  { text: "Falls perfectly without her trying", time: 21 },
  { text: "She's so beautiful", time: 24 },
  { text: "And I tell her every day", time: 27 },
  { text: "Yeah, I know, I know", time: 31 },
  { text: "When I compliment her she won't believe me", time: 34 },
  { text: "And it's so, it's so", time: 37 },
  { text: "Sad to think that she don't see what I see", time: 39 },
  { text: "But every time she asks me", time: 41 },
  { text: "'Do I look okay?', I say", time: 45 },
  { text: "When I see your face", time: 50 },
  { text: "There's not a thing that I would change", time: 54 },
  { text: "'Cause you're amazing", time: 57 },
  { text: "Just the way you are", time: 60 },
  { text: "And when you smile", time: 64 },
  { text: "The whole world stops and stares for a while", time: 68.8 },
  { text: "'Cause girl, you're amazing", time: 72.8 },
  { text: "Just the way you are. Yeah.", time: 75.5 },
  { text: "Her lips, her lips", time: 80 },
  { text: "I could kiss them all day if she let me", time: 83 },
  { text: "Her laugh, her laugh", time: 86 },
  { text: "She hates but I think it's so sexy", time: 89 },
  { text: "She's so beautiful", time: 92 },
  { text: "And I tell her every day", time: 95 },
  { text: "Oh, you know, you know, you know", time: 99 },
  { text: "I'd never ask you to change", time: 102 },
  { text: "If perfect's what you're searching for", time: 106 },
  { text: "Then just stay the same", time: 109 },
  { text: "So, don't even bother asking", time: 112 },
  { text: "If you look okay, you know I'll say", time: 115 },
  { text: "When I see your face", time: 119 },
  { text: "There's not a thing that I would change", time: 123 },
  { text: "'Cause you're amazing", time: 126 },
  { text: "Just the way you are", time: 129 },
  { text: "And when you smile", time: 133 },
  { text: "The whole world stops and stares for a while", time: 135.8 },
  { text: "'Cause girl, you're amazing", time: 139.8 },
  { text: "Just the way you are", time: 144 },
  { text: "The way you are", time: 152 },
  { text: "The way you are", time: 154 },
  { text: "Girl, you're amazing", time: 157 },
  { text: "Just the way you are. Yeah.", time: 160 },
  { text: "When I see your face", time: 165 },
  { text: "There's not a thing that I would change", time: 169 },
  { text: "'Cause you're amazing", time: 172 },
  { text: "Just the way you are", time: 175 },
  { text: "And when you smile", time: 179 },
  { text: "The whole world stops and stares for a while", time: 182 },
  { text: "'Cause girl, you're amazing", time: 186 },
  { text: "Just the way you are. Yeah.", time: 190 }
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);