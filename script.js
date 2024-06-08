document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector('.container');

  container.addEventListener('mouseenter', () => {
      container.style.transform = 'scale(1.05)';
  });

  container.addEventListener('mouseleave', () => {
      container.style.transform = 'scale(1)';
  });
});
