export function renderSkills(skills) {
  return skills
    .filter(skill => skill.state === "dominada")
    .map(skill => `
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