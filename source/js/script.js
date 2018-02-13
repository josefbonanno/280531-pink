  var menuButton = document.querySelector(".main-nav__toggle-open");
  var closeButton = document.querySelector(".main-nav__toggle-close");
  var menu = document.querySelector(".header-nav");
  menuButton.addEventListener("click", function () {
    menu.classList.add("modal-content-show");
    closeButton.classList.add("modal-content-show");
    menuButton.classList.add("modal-content-close");
  });
