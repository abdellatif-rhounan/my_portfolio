// ========= Scroll Active Links =======
let sections = document.querySelectorAll('section');
let header = document.querySelector("header");
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  let top = window.scrollY;

  sections.forEach(sec => {
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < (offset + height)) {
      navLinks.forEach(links => {
        links.classList.remove("active");
        document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
      });
    }
  });

  //========== sticky navbar ==========
  header.classList.toggle('sticky', top > 100);
};
