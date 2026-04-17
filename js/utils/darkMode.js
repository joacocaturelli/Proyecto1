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
        localStorage.setItem("darkMode", "activado");
    } else {
        //Icono sol
        icon.src = "https://res.cloudinary.com/do0white9/image/upload/v1776022339/sun_p2fszq.svg";
        localStorage.setItem("darkMode", "desactivado");
    }
}

//Funcion para comprobar el estado del modo oscuro al cargar la pagina, si el modo oscuro esta activado en localStorage, añadir la clase 'dark-mode' al body y cambiar el icono del toggle
export function comprobarDarkMode() {
    const localDarkMode = localStorage.getItem("darkMode"); //Obtener el estado del modo oscuro desde localStorage
    const icon = document.getElementById("iconToggle"); //Obtener el elemento del icono del toggle para cambiarlo dependiendo del estado del modo oscuro
    
    if (localDarkMode === "activado") { //Si el modo oscuro esta activado en localStorage, añadir la clase 'dark-mode' al body y cambiar el icono del toggle
        document.body.classList.add("dark-mode");
        icon.src = "https://res.cloudinary.com/do0white9/image/upload/v1776022339/moon-01_kgwpky.svg";
    } else { //Si el modo oscuro no esta activado en localStorage, quitar la clase 'dark-mode' al body y cambiar el icono del toggle
        document.body.classList.remove("dark-mode");
        icon.src = "https://res.cloudinary.com/do0white9/image/upload/v1776022339/sun_p2fszq.svg";
    }
}