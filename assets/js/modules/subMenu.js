const subMenu = () => {
  const menu = document.querySelector(".products-menu");
  const submenu = document.querySelector(".products-menu__sub-menu");

  menu.addEventListener("mouseover", (e) => {
    if (e.target.className == "products-menu__link") {
      let submenu = e.target.parentNode.querySelector(
        ".products-menu__sub-menu"
      );
      closemenu();
      submenu.classList.add("open");
    }
  });
  document.body.addEventListener("mouseover", (e) => {
    if (
      (e.target.className != "products-menu__link") &
      (e.target.className != "products-menu") &
      (e.target.className != "products-menu__sub-menu open") &
      (e.target.className != "products-menu__item") &
      (e.target.className != "img") &
      (e.target.tagName != "A") &
      (e.target.tagName != "LI") &
      (e.target.tagName != "IMG")
    ) {
      closemenu();
    }
  });
  function closemenu() {
    const submenu = document.querySelectorAll(".products-menu__sub-menu");
    submenu.forEach((item) => {
      item.classList.remove("open");
    });
  }
};

export default subMenu;
