// Typewriter effect for terminal
const text = "Hello, I am Ammar Kasbaoui, a Computer Science Student specializing in Big Data & AI.";
let index = 0;

function typeWriter() {
    if (index < text.length) {
        document.getElementById('typewriter').innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100);  // Adjust typing speed here
    }
}
