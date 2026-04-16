// ===== Mobile menu toggle =====
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (toggle) {
    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  }

  // ===== Active link highlight =====
  const currentPage = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });

  // ===== Contact form handling =====
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const nome = form.querySelector('#nome').value.trim();
      showModal(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`);
      form.reset();
    });
  }

  // ===== Gallery click =====
  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
      showModal(`Você clicou em: ${item.textContent}`);
    });
  });

  // ===== Modal close =====
  const overlay = document.getElementById('modalOverlay');
  if (overlay) {
    overlay.addEventListener('click', e => {
      if (e.target === overlay) closeModal();
    });
  }
});

function showModal(message) {
  const overlay = document.getElementById('modalOverlay');
  const text = document.getElementById('modalText');
  if (overlay && text) {
    text.textContent = message;
    overlay.classList.add('show');
  }
}

function closeModal() {
  const overlay = document.getElementById('modalOverlay');
  if (overlay) overlay.classList.remove('show');
}
