const header = document.querySelector(".header");
const headerTop = document.querySelector(".header-top");
const headerBot = document.querySelector(".header-bot");
const headerMenuItems = document.querySelectorAll(".header-menu-item");
const scrollUpBtn = document.querySelector(".scroll-up-btn");
const headerAuthLogin = document.querySelector(".header-auth-login");
const modalLogin = document.querySelector(".modal-login");
const modalSignup = document.querySelector(".modal-signup");
const headerAuthSignup = document.querySelector(".header-auth-signUp");
const modalContents = document.querySelector(".modal-content");
const navbarToggle = document.querySelector(".header-navbar-toggle");
const closeModals = document.querySelectorAll(".modal-close");
const headerMenu = document.querySelector(".header-menu");
//Load
window.addEventListener("load", e => {
  e.preventDefault();
  //Scroll----------
  window.addEventListener("scroll", e => {
    e.preventDefault();
    const scrollHeight = window.pageYOffset;
    const navHeight = headerBot.getBoundingClientRect().height;
    if (scrollHeight > navHeight) {
      header.style.setProperty(
        "background-color",
        "rgba(0, 0, 0, 0.9)",
        "important"
      );
      hiddenHeaderTop();
      // headerMenuItems.forEach(menuItem => {
      //   menuItem.style.padding = "40px 0";
      // });
    } else if (scrollHeight < navHeight) {
      headerTop.style.display = "flex";
      header.style.backgroundColor = "rgba(28, 28, 28, 0.3)";
      // headerMenuItems.forEach(menuItem => {
      //   menuItem.style.padding = "30px 0";
      // });
    }
    if (scrollHeight > 100) {
      scrollUpBtn.classList.add("show");
    } else {
      scrollUpBtn.classList.remove("show");
    }
  });
  // Scroll to Top
  scrollUpBtn.addEventListener("click", e => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  // --------------------
  // Modal
  hideOnModal();
  //Navbar toggle
  navbarToggle.addEventListener("click", e => {
    e.preventDefault();
    headerMenu.classList.toggle("show-header-menu");
  });
});

function hideOnModal() {
  //modal Login
  headerAuthLogin.addEventListener("click", e => {
    e.preventDefault();
    modalLogin.classList.add("show");
  });
  headerAuthSignup.addEventListener("click", e => {
    e.preventDefault();
    modalSignup.classList.add("show");
  });
  //Close modal

  closeModals.forEach(closeModal => {
    closeModal.addEventListener("click", e => {
      e.preventDefault();
      modalLogin.classList.remove("show");
      modalSignup.classList.remove("show");
    });
  });
}

function hiddenHeaderTop() {
  headerTop.style.transition = "all 2s";
  headerTop.style.display = "none";
}
