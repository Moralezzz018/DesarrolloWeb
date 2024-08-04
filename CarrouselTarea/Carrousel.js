document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const slideWidth = slides[0].getBoundingClientRect().width;
  
    let currentIndex = 0;
  
    //Función para mover de lado
    const movertarjeta = () => {
      currentIndex++;
      if (currentIndex >= slides.length) {
        currentIndex = 0;
      }
      track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
    };
  
    //cada 3 segundos
    setInterval(movertarjeta, 3000);
  });