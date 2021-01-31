import filmMarkup from '../templates/modal-film-markup.hbs';
import signupMarkup from '../templates/modal-signup-markup.hbs';
import loginMarkup from '../templates/modal-login-markup.hbs';
import footerMarkup from '../templates/modal-footer-markup.hbs';

const openFilmModalBtn = document.querySelector('.js-section-film');
const openSignupModalBtn = document.querySelector('button[data-open="signup"]');
const openLoginModalBtn = document.querySelector('button[data-open="login"]');
const openFooterModalBtn = document.querySelector('a[data-open="footer"]');
const modalContentRef = document.querySelector('.modal-content');
const closeModalBtn = document.querySelector('button[data-close-modal]');
const backdropRef = document.querySelector(".js-backdrop");

openFilmModalBtn.addEventListener("click", onOpenModal);
openSignupModalBtn.addEventListener("click", onOpenModal);
openLoginModalBtn.addEventListener("click", onOpenModal);
openFooterModalBtn.addEventListener("click", onOpenModal);
closeModalBtn.addEventListener("click", onCloseModal);
backdropRef.addEventListener("click", onBackdropClick);

// Open 
function onOpenModal(event) {
   window.addEventListener("keydown", onPressEscape);
   const dataSet = event.target.dataset;
   const dataOpen = event.target.dataset.open

   if (dataOpen === "signup") {
      document.body.classList.add("show-modal-signup");
      modalContentRef.innerHTML = signupMarkup();
   } else if (dataOpen === "login") {
      console.log("login");

      document.body.classList.add("show-modal-signup");
      modalContentRef.innerHTML = loginMarkup();
   } else if (dataOpen === "film") {
      document.body.classList.add("show-modal-film");
      modalContentRef.innerHTML = filmMarkup();
      console.log(dataSet.id);
   } else if (dataOpen === "footer") {
      document.body.classList.add("show-modal-footer");
      modalContentRef.innerHTML = footerMarkup();
   }
};

// Close by backdrop
function onBackdropClick(event) {
   if (event.target === event.currentTarget) {
      onCloseModal();
   }
};

// Close by Esc
function onPressEscape(event) {
   if (event.code === "Escape") {
      onCloseModal();
   }
};

// Close Modal
function onCloseModal() {
   window.removeEventListener("keydown", onPressEscape);
   document.body.classList.remove("show-modal-film");
   document.body.classList.remove("show-modal-signup");
   document.body.classList.remove("show-modal-footer");
}

// modalContentRef.insertAdjacentHTML = apiService.getMoviesData().then(data => filmMarkup(data[0]));