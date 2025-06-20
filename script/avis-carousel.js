// Carousel pour les avis clients
window.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.avis-slide');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');
  let current = 0;
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }
  prevBtn.addEventListener('click', () => {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  });
  nextBtn.addEventListener('click', () => {
    current = (current + 1) % slides.length;
    showSlide(current);
  });
  setInterval(() => {
    current = (current + 1) % slides.length;
    showSlide(current);
  }, 7000);
}); 