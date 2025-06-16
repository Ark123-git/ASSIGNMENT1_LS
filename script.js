// script.js
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');
  
    let current = '';
    sections.forEach(section => {
      const top = window.scrollY;
      const offset = section.offsetTop - 100;
      const height = section.offsetHeight;
      if (top >= offset && top < offset + height) {
        current = section.getAttribute('id');
      }
    });
  
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').includes(current)) {
        link.classList.add('active');
      }
    });
  });

  