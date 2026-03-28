document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav-links');
  if (toggle && nav) {
    toggle.addEventListener('click', () => nav.classList.toggle('open'));
    document.addEventListener('click', (e) => {
      if (!toggle.contains(e.target) && !nav.contains(e.target)) {
        nav.classList.remove('open');
      }
    });
  }

  // Anti-spam: record form load time
  const form = document.getElementById('contact-form');
  if (form) {
    const loadTime = Date.now();

    form.addEventListener('submit', (e) => {
      const honeypot = document.getElementById('website');
      const elapsed = (Date.now() - loadTime) / 1000;

      // Block if honeypot filled (bot)
      if (honeypot && honeypot.value) {
        e.preventDefault();
        return;
      }

      // Block if submitted within 3 seconds (too fast for human)
      if (elapsed < 3) {
        e.preventDefault();
        alert('Please take a moment to fill out the form.');
        return;
      }
    });
  }
});
