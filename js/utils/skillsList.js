//Exportar funcion para renderizar las skills dominadas.
export function renderSkills(skills) {
    //Devolver un string con el HTML de las tarjetas de skills dominadas.
    return skills

    //Filtrar las skills que están dominadas.
    .filter(skill => skill.state === "dominada")
    
    //Mapear las skills dominadas para crear el HTML de cada tarjeta.
    .map(skill => 
        `
        <div class="tarjeta">
            <img src="${skill.icon}" alt="${skill.name}" class="skill-icon">
            <h3>${skill.name}</h3>
            <p><strong>Nivel:</strong> ${skill.level}</p>
            <p>${skill.description}</p>
            <div class="skill-tags">
            ${skill.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
        </div>
    `)
    .join('');
}
