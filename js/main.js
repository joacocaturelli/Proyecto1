// Funcion para renderizar el header y el footer principal
import { mainHeaderTemplate, mainFooterTemplate } from "./templates/templates.js";

//Funcion para rendereizar la lista de skills dominadas
import { renderSkills} from "./utils/skillsList.js";

//Importar lista de skills
import { skillsData } from "./data/skills.js";

//Funcion para el modo oscuro
import { darkMode } from "./utils/darkMode.js";

//Funcion para el menu hamburguesa
import { menu } from "./utils/menu.js";


// Renderizar el header y el footer
document.getElementById("main-header").innerHTML = mainHeaderTemplate();
document.getElementById("main-footer").innerHTML = mainFooterTemplate();

// Renderizar la lista de skills dominadas
document.getElementById("skills-container").innerHTML = renderSkills(skillsData);

// Añadir evento al botón de modo oscuro
document.getElementById("btnModoOscuro").addEventListener("click", darkMode);

// Inicializar el menú hamburguesa
menu();




