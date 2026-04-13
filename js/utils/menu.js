// Menú Hamburguesa: Exportar la función
// menu (por defecto). Implementar el toggle
// para la hamburguesa, añadir/quitar la clase
// 'active' a la hamburguesa y al menú
// (nav-links), y cerrar automáticamente el
// menú al hacer clic en un enlace.

export function menu() {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.querySelector(".nav-list");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
    console.log("entra")
  });

  // Cerrar el menú al hacer clic en un enlace
  const navLinksItems = document.querySelectorAll(".nav-list a");
  navLinksItems.forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navLinks.classList.remove("active");
    });
  });
}