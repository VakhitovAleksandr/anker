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

export default formPopup;
