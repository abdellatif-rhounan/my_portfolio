let sections = document.querySelectorAll('section');
let header = document.querySelector("header");
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  let scrollPos = window.scrollY;

  //========== sticky navbar ==========
  header.classList.toggle('sticky', scrollPos > 50);

  // ========= Scroll Active Links =======
  sections.forEach(sec => {
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (scrollPos >= offset && scrollPos < (offset + height)) {
      navLinks.forEach(link => {
        link.classList.remove("active");
      });
      document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
    }
  });
};
