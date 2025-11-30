// simple nav active + year
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear();

  // scrollspy for sidebar
  const links = Array.from(document.querySelectorAll('.menu a'));
  const sections = links.map(l => document.querySelector(l.getAttribute('href')));
  function onScroll(){
    const y = window.scrollY + 120;
    let idx = sections.length - 1;
    for (let i = 0; i < sections.length; i++){
      if (y < sections[i].offsetTop) { idx = i-1; break; }
    }
    links.forEach(l => l.classList.remove('active'));
    if (idx >= 0) links[idx].classList.add('active');
  }
  window.addEventListener('scroll', onScroll);
  onScroll();
});
