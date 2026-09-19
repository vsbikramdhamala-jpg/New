
const body = document.body;
const header = document.getElementById("header");
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");
const themeBtn = document.getElementById("themeBtn");

if (menuBtn && navMenu) {
  menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("open");
    menuBtn.innerHTML = navMenu.classList.contains("open")
      ? '<i class="fa-solid fa-xmark"></i>'
      : '<i class="fa-solid fa-bars"></i>';
  });
}
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    navMenu?.classList.remove("open");
    if (menuBtn) menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
  });
});

window.addEventListener("scroll", () => {
  header?.classList.toggle("scrolled", window.scrollY > 20);
});

const savedTheme = localStorage.getItem("bikram-theme");
if (savedTheme === "light") {
  body.classList.add("light");
  if (themeBtn) themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
}
themeBtn?.addEventListener("click", () => {
  body.classList.toggle("light");
  const light = body.classList.contains("light");
  localStorage.setItem("bikram-theme", light ? "light" : "dark");
  themeBtn.innerHTML = light
    ? '<i class="fa-solid fa-sun"></i>'
    : '<i class="fa-solid fa-moon"></i>';
});

document.getElementById("year")?.replaceChildren(String(new Date().getFullYear()));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, {threshold:.12});
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const page = body.dataset.page;
document.querySelectorAll(".nav-link").forEach(link => {
  link.classList.toggle("active", link.dataset.page === page);
});

/* Home hero photo rotation: every 3 seconds. */
const photoSlides = [...document.querySelectorAll(".photo-slide")];
if (photoSlides.length) {
  let photoIndex = 0;
  function showPhoto(index) {
    photoIndex = (index + photoSlides.length) % photoSlides.length;
    photoSlides.forEach((slide, i) => {
      slide.classList.toggle("active", i === photoIndex);
    });
  }
  showPhoto(0);
  setInterval(() => showPhoto(photoIndex + 1), 3000);
}
