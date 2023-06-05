let header = document.getElementById("header");
let navLinks = document.querySelectorAll('header nav a');
let sections = document.querySelectorAll('section');
let secData = [];

// ======= initial sticky class check ======
window.onload = () => {
  header.classList.toggle('sticky', window.scrollY > 50);
};

// ======= Data of All Sections ======
sections.forEach(sec => {
  let arr = [];
  let id = sec.getAttribute('id');
  let startPos = sec.offsetTop - 50;
  let endPos = startPos + sec.offsetHeight;
  arr.push(id, startPos, endPos);
  secData.push(arr);
});

// ======= Scroll Event ========
window.onscroll = () => {
  let scrollPos = window.scrollY;

  //========== sticky navbar ==========
  header.classList.toggle('sticky', scrollPos > 50);

  // ========= Header Active Link =======
  let i = 0;
  secData.forEach(sec => {
    if (scrollPos >= sec[1] && scrollPos < (sec[2])) {
      navLinks.forEach(link => {
        link.classList.remove("active");
      });
      navLinks[i].classList.add("active");
    }
    i++;
  });
};

// =========== Scroll Reveal ==========
ScrollReveal({
  reset: true,
  distance: '80px',
  duration: 1000,
  delay: 200,
});

ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .works-container, .contact form', {origin: 'bottom'});
ScrollReveal().reveal('.home-social, .about-img', {origin: 'left'});
ScrollReveal().reveal('.about-content', {origin: 'right'});
