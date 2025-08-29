document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      const isActive = card.classList.contains('active');

      // Cerrar todas las tarjetas primero
      cards.forEach(c => c.classList.remove('active'));
      cards.forEach(c => {
        const detalle = c.querySelector('.detalle');
        detalle?.setAttribute('hidden', '');
      });

      // Si no estaba activa, abrirla
      if (!isActive) {
        card.classList.add('active');
        const detalle = card.querySelector('.detalle');
        detalle?.removeAttribute('hidden');
      }
    });
  });
});
