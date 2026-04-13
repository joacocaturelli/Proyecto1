export function darkMode() {
  const cambioTema = document.body;
  const icon = document.getElementById("iconToggle");

  cambioTema.classList.toggle("dark-mode");

  if (cambioTema.classList.contains("dark-mode")) {
    icon.src = "https://res.cloudinary.com/do0white9/image/upload/v1776022339/moon-01_kgwpky.svg";
  } else {
    icon.src = "https://res.cloudinary.com/do0white9/image/upload/v1776022339/sun_p2fszq.svg";
  }
}