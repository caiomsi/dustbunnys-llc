// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});

// Mobile hamburger menu
const hamburger = document.querySelector('.hamburger');
const navLinks  = document.querySelector('.nav-links');
hamburger?.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  hamburger.classList.toggle('open');
});
// Close on link click
navLinks?.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => navLinks.classList.remove('open'))
);

// Highlight today's hours row
const days = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
const today = days[new Date().getDay()];
const row = document.getElementById('row-' + today);
if (row) row.classList.add('today');

// Reveal on scroll
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
revealEls.forEach(el => io.observe(el));

// Smooth-scroll CTA phone links
document.querySelectorAll('a[href^="tel"]').forEach(a => {
  a.addEventListener('click', () => {
    if ('gtag' in window) gtag('event', 'phone_click', { event_category: 'contact' });
  });
});
