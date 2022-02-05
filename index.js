// Navigation box.
const nav = document.querySelector(".nav");
nav.addEventListener("click", ({ target }) => {
  if (target === nav) nav.classList.toggle("active");
});

// Close button.
const closeButton = document.querySelector(".close-button");
closeButton.addEventListener("click", () => nav.classList.toggle("active"));
