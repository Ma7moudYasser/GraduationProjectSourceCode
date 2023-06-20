
function scrollToSection(selector) {
  const section = document.querySelector(selector);
  section.scrollIntoView({ behavior: 'smooth' });
}
