// HEADER HAMBURGUER

const menuToggle = document.getElementById("menu-toggle");
const navContent = document.getElementById("navContent");

menuToggle.addEventListener("click", () => {
  navContent.classList.toggle("active");
  menuToggle.classList.toggle("active");

  const expanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!expanded));
});

menuToggle.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    menuToggle.click();
  }
});
