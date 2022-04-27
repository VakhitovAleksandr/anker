
window.addEventListener("DOMContentLoaded", () => {

  let filterAside = function () {
    let filterlist = document.querySelectorAll('.aside-filter__list');
    filterlist.forEach(item => {
      item.addEventListener('click', function (e) {
        if (e.target.classList.contains('aside-filter__item')) {
          e.target.classList.toggle('active');
          if (e.target.classList.contains('active')) {
            let value = e.target.innerText;
            e.target.setAttribute('data-value', value);
          } else {
            e.target.removeAttribute('data-value');
          }
        }
      });
    });

  }

  if (document.querySelectorAll('.aside-filter__list')) {
    filterAside();
  }

  const formPopup = () => {
    const formPopup = document.querySelector(".form-popup");

    const popup = document.createElement("div");
    popup.classList.add("popup");

    document.addEventListener("click", (e) => {
      if (e.target.dataset.form == "1") {
        setTimeout(function () {
          document.body.appendChild(popup);
          popup.appendChild(formPopup);
          formPopup.style.display = "block";
          document.body.style.overflow = "hidden";
        }, 300);
      }
      if (e.target.matches("div.popup") || e.target.matches("i.far")) {
        setTimeout(function () {
          formPopup.style.display = "block";
          document.body.removeChild(popup);
          document.body.style.overflow = "";
        }, 300);
      }
    });

    function hideFormPopup() {
      formPopup.style.display = "none";
    }

    hideFormPopup();
  };
  const headerSticky = () => {
    let middleBar = document.querySelector(".middle-bar");
    let header = document.querySelector(".header");
    let main = document.querySelector(".main");

    let headerH = header.clientHeight;

    window.addEventListener("scroll", () => {
      if (pageYOffset > headerH * 2) {
        middleBar.classList.add("stycky");
        document.body.style.paddingTop = "80px";
      } else {
        middleBar.classList.remove("stycky");

        document.body.style.paddingTop = "";
      }
    });
  };
  const imgPopup = () => {
    const popup = document.createElement("div");
    const imgBig = document.createElement("img");
    const closeIcon = document.createElement("i");
    const popupTitle = document.createElement("h4");

    closeIcon.classList.add("fas", "fa-times");
    popup.classList.add("popup");

    closeIcon.style.top = "20px";
    closeIcon.style.right = "20px";
    closeIcon.style.fontSize = "20px";
    closeIcon.style.position = "absolute";
    closeIcon.style.cursor = "pointer";

    popupTitle.style.position = "absolute";
    popupTitle.style.fontSize = "22px";
    popupTitle.style.bottom = "20px";
    popupTitle.style.left = "50%";
    popupTitle.style.transform = "translateX(-50%)";

    document.addEventListener("click", (e) => {
      if (e.target.dataset.imgpopup == "1") {
        popupTitle.innerHTML = e.target.getAttribute("data-title");

        let imgPath = e.target.getAttribute("src");
        popup.style.background = "#fff";
        document.body.appendChild(popup);
        imgBig.setAttribute("src", imgPath);
        popup.appendChild(imgBig);
        popup.appendChild(closeIcon);
        popup.appendChild(popupTitle);

        document.body.style.overflow = "hidden";

        closeIcon.addEventListener("click", (e) => {
          document.body.removeChild(popup);
          document.body.style.overflow = "";
        });
      }
    });
  };
  const menuMobile = () => {
    const header = document.querySelector('.header-top');
    const menuModile = document.querySelector('.nav-header');
    const navHeaderBurger = document.querySelector('.nav-header-burger');
    const navHEaderClose = document.querySelector('.nav-header__close');
    const buttonSearchMobile = document.querySelector('.button-search-mobile');
    const formMiddle = document.querySelector('.form-middle');

    const bodyBg = document.createElement('div');
    bodyBg.classList.add('bodyBg');
    header.appendChild(bodyBg);
    navHeaderBurger.addEventListener('click', () => {
      menuModile.classList.toggle('show-menu');
      if (menuModile.classList.contains('show-menu')) {
        document.body.style.overflow = 'hidden';
        bodyBg.classList.add('active');


      }
      navHEaderClose.addEventListener('click', () => {
        menuModile.classList.remove('show-menu');
        if (!menuModile.classList.contains('show-menu')) {
          document.body.style.overflow = '';
          bodyBg.classList.remove('active');
        }
      });
    });

    buttonSearchMobile.addEventListener('click', () => {
      formMiddle.classList.toggle('show');
    });
  }
  const popupImages = () => {

    const popup = document.createElement('div');
    const eventImg = document.querySelectorAll('.inpopup');
    const imgBig = document.createElement('img');
    const popupClose = document.createElement('i');
    const eventImgTitle = document.querySelector('.section-title').innerHTML;
    const popupTitle = document.createElement('h3');

    popup.classList.add('popup');
    popupClose.classList.add("fas", "fa-times")
    popupTitle.classList.add('title');
    popup.appendChild(popupClose);

    eventImg.forEach(item => {
      item.addEventListener('click', (e) => {
        popup.style.display = 'flex';
        document.body.appendChild(popup);
        const path = item.getAttribute('src');
        imgBig.setAttribute('src', path);
        popup.appendChild(imgBig);
        popupTitle.innerHTML = eventImgTitle;
        popup.appendChild(popupTitle);
        document.body.style.overflow = 'hidden';
      });
      popupClose.addEventListener('click', () => {
        popup.style.display = 'none';
        document.body.style.overflow = '';
      });

    });





  }
  let select = function () {
    let select = document.querySelectorAll('.select');
    let selectOptions = document.querySelectorAll('.select__option');

    select.forEach(item => {
      item.addEventListener('click', function () {
        let options = this.querySelector('.select__options');
        options.classList.toggle('active');
        this.querySelector('.select__selected').classList.toggle('active');
      });
    });

    selectOptions.forEach(item => {
      item.addEventListener('click', function () {
        let text = this.innerText;
        this.closest('.select__content').querySelector('.select__selected')
          .innerText = text;
      });
    });

  }
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
  const tabs = () => {
    const header = document.querySelector('.nav-tabs');
    const tabs = document.querySelectorAll('.nav-tabs__item');
    let content = document.querySelectorAll('.content-tabs__body');

    function hideTabContent() {

      content.forEach(item => {
        item.style.display = 'none';
      });
      tabs.forEach(item => {
        item.classList.remove('active');
      });
    }
    function showTabContent(i = 0) {
      content[i].style.display = 'block';
      tabs[i].classList.add('active');
    }

    hideTabContent();
    showTabContent();

    header.addEventListener('click', (e) => {
      const target = e.target;
      if (target.classList.contains('nav-tabs__item')) {

        tabs.forEach((item, i) => {
          if (target == item) {
            hideTabContent();
            showTabContent(i);
          }

        });
      }
    });
  }

  if (document.querySelector(".tabs-block")) {
    tabs();
  }
  if (document.querySelector(".form-popup")) {
    formPopup();
  }
  if (document.querySelector(".products-menu")) {
    subMenu();
  }
  if (document.querySelector(".select")) {
    select();
  }
  menuMobile();
  headerSticky();

  imgPopup();
});
