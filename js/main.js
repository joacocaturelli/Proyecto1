import { mainHeaderTemplate } from "./templates/templates.js";
import { mainFooterTemplate } from "./templates/templates.js";
import { renderSkills} from "./utils/skillsList.js";
import { skillsData } from "./data/skills.js";
import { darkMode } from "./utils/darkMode.js";
import { menu } from "./utils/menu.js";

document.getElementById("main-header").innerHTML = mainHeaderTemplate();
document.getElementById("main-footer").innerHTML = mainFooterTemplate();
renderSkills(skillsData);
document.getElementById("btnModoOscuro").addEventListener("click", darkMode);
menu();

console.log("skillsData:", skillsData);
console.log("skillsHTML:", skillsHTML);



