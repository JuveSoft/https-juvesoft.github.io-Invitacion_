
// Poner música

let sound = new Audio('Musica/You Shook Me All Night Long.mp3');

playBtn.addEventListener('click', () => {
     sound.play();
})

pauseBtn.addEventListener('click', () => {
     sound.pause();
})


// Establece la fecha y hora objetivo
const targetDate = new Date("April 11, 2025 21:00:00").getTime();

// Actualiza la cuenta regresiva cada segundo
const countdown = setInterval(() => {
     const now = new Date().getTime();
     const distance = targetDate - now;

     // Calcula los días, horas, minutos y segundos
     const days = Math.floor(distance / (1000 * 60 * 60 * 24));
     const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
     const seconds = Math.floor((distance % (1000 * 60)) / 1000);

     // Muestra el resultado en el elemento con id="countdown"
     document.getElementById("countdown").innerHTML =
          `${days}d ${hours}h ${minutes}m ${seconds}s`;

     // Si la cuenta regresiva ha terminado, muestra un mensaje
     if (distance < 0) {
          clearInterval(countdown);
          document.getElementById("countdown").innerHTML = "¡La cuenta regresiva ha terminado!";
     }
}, 1000);


