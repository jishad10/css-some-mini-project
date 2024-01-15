const menuIcon = document.getElementById("menu-icon");  /* menu-icon id ta ke select ko re nichi */
const menu = document.getElementById("menu");

menuIcon.addEventListener("click", () => {
  if (menu.className === "hidden") {
    menu.classList.remove("hidden");  /* hidden claas ta remove hoi jabe mani show korbe nav list golo */
  } else {
    menu.classList.add("hidden");
  }
});