// Menú móvil
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

if (toggle) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

// Cards: abrir/cerrar detalle accesible
document.querySelectorAll('.card').forEach(card => {
  const toggleCard = () => {
    const detalle = card.querySelector('.detalle');
    const isOpen = !detalle.hasAttribute('hidden');

    document.querySelectorAll('.detalle').forEach(d => d.setAttribute('hidden', true));
    document.querySelectorAll('.card').forEach(c => c.setAttribute('aria-expanded', 'false'));

    if (!isOpen) {
      detalle.removeAttribute('hidden');
      card.setAttribute('aria-expanded', 'true');
    }
  };

  card.addEventListener('click', toggleCard);
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleCard();
    }
  });
});

// Scroll suave para anclas
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href');
    if (id.length > 1 && document.querySelector(id)) {
      e.preventDefault();
      document.querySelector(id).scrollIntoView({ behavior: 'smooth', block: 'start' });
      nav?.classList.remove('open');
      toggle?.setAttribute('aria-expanded', 'false');
    }
  });
});


