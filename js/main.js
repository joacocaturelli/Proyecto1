// Funcion para renderizar el header y el footer principal
import { mainHeaderTemplate, mainFooterTemplate } from "./templates/templates.js";

//Funcion para rendereizar la lista de skills dominadas
import { renderSkills } from "./utils/skillsList.js";

//Importar lista de skills
import { skillsData } from "./data/skills.js";

//Funcion para el modo oscuro
import { darkMode } from "./utils/darkMode.js";

//Funcion para el menu hamburguesa
import { menu } from "./utils/menu.js";

//Funcion para comprobar el estado del modo oscuro al cargar la pagina
import { comprobarDarkMode } from "./utils/darkMode.js";

// Renderizar el header y el footer
document.getElementById("main-header").innerHTML = mainHeaderTemplate();
document.getElementById("main-footer").innerHTML = mainFooterTemplate();

// Renderizar la lista de skills dominadas solo si existe el contenedor de skills en la pagina, para evitar errores en paginas que no lo tengan
const skillsContainer = document.getElementById("skills-container");
if (skillsContainer) {
    skillsContainer.innerHTML = renderSkills(skillsData);
}

// Añadir evento al botón de modo oscuro
document.getElementById("btnModoOscuro").addEventListener("click", darkMode);

// Inicializar el menú hamburguesa
menu();
comprobarDarkMode();



