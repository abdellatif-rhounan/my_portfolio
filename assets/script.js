let header = document.querySelector("header");
let navLinks = document.querySelectorAll('header nav a');
let sections = document.querySelectorAll('section');
let secData = [];

// ======= Data of All Sections ======
sections.forEach(sec => {
  let arr = [];
  let id = sec.getAttribute('id');
  let offset = sec.offsetTop - 50;
  let height = sec.offsetHeight;
  arr.push(id, offset, offset + height);
  secData.push(arr);
});

// ======= initial sticky class check ======
window.onload = () => {
  header.classList.toggle('sticky', window.scrollY > 50);
};

window.onscroll = () => {
  let scrollPos = window.scrollY;

  // ========= Scroll Active Link =======
  let i = 0;
  secData.forEach(sec => {
    if (scrollPos >= sec[1] && scrollPos < (sec[2])) {
      navLinks.forEach(link => {
        link.classList.remove("active");
      });
      navLinks[i].classList.add("active");

      //========== sticky navbar ==========
      if (sec[0] === 'home') {
        header.classList.toggle('sticky', scrollPos > 50);
      }
    }
    i++;
  });
};
