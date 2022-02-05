const nav = document.querySelector(".nav");
nav.addEventListener("click", ({ target }) => {
  if (target === nav) {
    nav.classList.toggle("active");
  }
});

const closeButton = document.querySelector(".close-button");
closeButton.addEventListener("click", (e) => {
  nav.classList.toggle("active");
});
