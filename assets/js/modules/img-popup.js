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

export default imgPopup;
