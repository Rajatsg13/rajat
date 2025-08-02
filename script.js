const toggle = document.getElementById('darkToggle');

toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });
document.getElementById('menuToggle').addEventListener('click', () => {
  document.querySelector('.sidebar').classList.toggle('open');
});

document.querySelectorAll('.section').forEach(section => {
  observer.observe(section);
});
