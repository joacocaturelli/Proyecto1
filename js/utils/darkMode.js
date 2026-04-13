//Exportar funcion para el modo oscuro.
export function darkMode() {
    //crear una variable para el body y otra para el icono del toggle
    const cambioTemaBody = document.body;
    const icon = document.getElementById("iconToggle");

    //toggle para el modo oscuro, añadir o quitar la clase 'dark-mode' al body
    cambioTemaBody.classList.toggle("dark-mode");

    //cambiar el icono del toggle dependiendo del modo, si el body tiene la clase 'dark-mode' mostrar el icono de la luna, sino mostrar el icono del sol
    if (cambioTemaBody.classList.contains("dark-mode")) {
        //Icono luna
        icon.src = "https://res.cloudinary.com/do0white9/image/upload/v1776022339/moon-01_kgwpky.svg";
    } else {
        //Icono sol
        icon.src = "https://res.cloudinary.com/do0white9/image/upload/v1776022339/sun_p2fszq.svg";
    }
}