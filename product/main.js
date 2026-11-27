const menu = document.querySelector(".nav-toggle");
const navigation = document.querySelector("#site-nav");

function setMenu(open) {
  menu.setAttribute("aria-expanded", String(open));
  menu.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  menu.firstElementChild.src = open ? "assets/icons/x.svg" : "assets/icons/menu.svg";
}

menu.hidden = false;
menu.addEventListener("click", () => setMenu(menu.getAttribute("aria-expanded") === "false"));
navigation.addEventListener("click", (event) => {
  const link = event.target.closest("a");
  if (!link || menu.getAttribute("aria-expanded") !== "true" || menu.offsetWidth === 0) return;
  setMenu(false);
  const destination = link.hash && document.getElementById(link.hash.slice(1));
  if (destination) {
    destination.tabIndex = -1;
    destination.focus({ preventScroll: true });
  }
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menu.getAttribute("aria-expanded") === "true" && menu.offsetWidth > 0) {
    setMenu(false);
    menu.focus();
  }
});
