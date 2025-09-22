let menu_icon = document.getElementById("menu-icon");
let icon = menu_icon.firstElementChild

menu_icon.addEventListener("click",() => {
  let menu = document.getElementById("menu");
  x = menu.classList.toggle("menu-active");

  if (x == true) {
    icon.innerHTML = "close";
  } else {
    icon.innerHTML = "menu";
  }
})

window.addEventListener("resize", () => {
  let menu = document.getElementById("menu");
  let width = window.screen.width
  if (width >= 768) {
    menu.classList.remove("menu-active");
  }
})