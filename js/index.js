const menuBtn = document.getElementById('menuBtn');
const closeBtn = document.getElementById('closeBtn');
const mobileNav = document.getElementById('mobileNav');
const overlay = document.getElementById('overlay');

function toggleMenu() {
  mobileNav.classList.toggle('active');
  overlay.classList.toggle('active');
  
  // Opcional: Bloquear el scroll del cuerpo cuando el menú está abierto
  document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : 'auto';
}

menuBtn.addEventListener('click', toggleMenu);
closeBtn.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu); // Cerrar al hacer click fuera