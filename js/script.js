const link_container = document.getElementById("link-container");
const open_side_menu = document.getElementById("menu-open");
const close_side_menu = document.getElementById("menu-close");

open_side_menu.addEventListener("click", () => {
  link_container.classList.add("link-open");
});

close_side_menu.addEventListener("click", () => {
  link_container.classList.remove("link-open");
});

const tabs = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".tab-content-container");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    contents.forEach((c) => c.classList.remove("active"));

    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");
  });
});

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-link");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navItems.forEach((item) => item.classList.remove("active"));
        const activeItem = document.querySelector(
          `.nav-link a[href="#${entry.target.id}"]`
        ).parentElement;
        if (activeItem) activeItem.classList.add("active");
      }
    });
  },
  { threshold: 0.6 }
);

sections.forEach((section) => {
  observer.observe(section);
});

const btn_send = document.getElementById("send-message");

btn_send.addEventListener("click", () => alert("Belum bisa mengirim pesan"));