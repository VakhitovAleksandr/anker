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

export default headerSticky;
