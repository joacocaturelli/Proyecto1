// Exportar la función para el menú hamburguesa.
export function menu() {
    // Crear variables para el botón de la hamburguesa y el contenedor de los enlaces de navegación.
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.querySelector(".nav-list");
    // Añadir un evento de clic al botón de la hamburguesa para alternar las clases 'active' en el botón y en el contenedor de enlaces.
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navLinks.classList.toggle("active");
    });

    // Crear una variable para los enlaces de navegacion.
    const navLinksItems = document.querySelectorAll(".nav-list a");

    // Añadir un evento de clic a cada enlace de navegación para cerrar el menú al hacer clic en un enlace.
    navLinksItems.forEach((link) => {
        link.addEventListener("click", () => {
            //Quitar las clases 'active' del botón de la hamburguesa y del contenedor de enlaces para cerrar el menú.
            hamburger.classList.remove("active");
            navLinks.classList.remove("active");
        });
    });
}