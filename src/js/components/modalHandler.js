import signupMarkup from '../templates/modal-signup-markup.hbs';
import filmMarkup from '../templates/modal-film-markup.hbs';

const openSignupModalBtn = document.querySelector('button[data-open="signup"]');
const openFilmModalBtn = document.querySelector('div[data-open="film"]');
const modalContentRef = document.querySelector('.modal-content');
const closeModalBtn = document.querySelector('button[data-close-modal]');
const backdropRef = document.querySelector(".js-backdrop");

openSignupModalBtn.addEventListener("click", onOpenModal);
openFilmModalBtn.addEventListener("click", onOpenModal);
closeModalBtn.addEventListener("click", onCloseModal);
backdropRef.addEventListener("click", onBackdropClick);

// Open 
function onOpenModal(event) {
   window.addEventListener("keydown", onPressEscape);
   const dataOpen = event.target.dataset.open

   if (dataOpen === "signup") {
      document.body.classList.add("show-modal-signup");
      modalContentRef.innerHTML = signupMarkup();
   } else if (dataOpen === "film") {
      document.body.classList.add("show-modal-film");
      modalContentRef.innerHTML = filmMarkup();
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
}