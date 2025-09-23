let link_container = document.getElementById("link-container");
let open_side_menu = document.getElementById("menu-open");
let close_side_menu = document.getElementById("menu-close");

open_side_menu.addEventListener("click",() => {
  link_container.classList.add("link-open");
})

close_side_menu.addEventListener("click",() => {
  link_container.classList.remove("link-open");
})

