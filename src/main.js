function parallaxScroll() {
  const scrollY = window.scrollY;
  document.querySelectorAll('.ef-parallax').forEach(section => {
    const factor = parseFloat(section.dataset.parallax || "0.2");
    section.style.transform = `translateY(${scrollY * factor}px)`;
  });
}
window.addEventListener('scroll', parallaxScroll);
window.addEventListener('DOMContentLoaded', parallaxScroll);

// Smooth scroll for nav links
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('header nav a, .ef-cta-hero').forEach(link => {
    link.addEventListener('click', e => {
      const href = link.getAttribute('href');
      if (href &amp;&amp; href.startsWith('#')) {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Contact form fake submit
  const form = document.querySelector('.ef-contact-form');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      form.reset();
      form.querySelector('button').textContent = "¡Enviado!";
      setTimeout(() => {
        form.querySelector('button').textContent = "Enviar Mensaje";
      }, 2000);
    });
  }
});
