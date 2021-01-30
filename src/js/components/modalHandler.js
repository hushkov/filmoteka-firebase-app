import signupMarkup from '../templates/modal-signup-markup.hbs';
import filmMarkup from '../templates/modal-film-markup.hbs';

const openSignupModalBtn = document.querySelector('button[data-open="signup"]');
const openFilmModalBtn = document.querySelector('div[data-open="film"]');
const modalContentRef = document.querySelector('.modal-content');
const closeModalBtn = document.querySelector('button[data-close-modal]');
const backdropRef = document.querySelector(".js-backdrop");

openSignupModalBtn.addEventListener("click", onOpenModal)
openFilmModalBtn.addEventListener("click", onOpenModal)
closeModalBtn.addEventListener("click", onCloseModal)
backdropRef.addEventListener("click", onBackdropClick)

function onOpenModal(event) {
   window.addEventListener("keydown", onPressEscape);
   document.body.classList.add("show-modal");

   const dataOpen = event.target.dataset.open
   console.log(dataOpen);

   if (dataOpen === "signup") {
      console.log("222");
      modalContentRef.innerHTML = signupMarkup();
   } else if (dataOpen === "film") {
      console.log("111");
      modalContentRef.innerHTML = filmMarkup();
   }
};

function onBackdropClick(event) {
   if (event.target === event.currentTarget) {
      onCloseModal();
   }
};

function onPressEscape(event) {
   if (event.code === "Escape") {
      onCloseModal();
   }
};

function onCloseModal() {
   window.removeEventListener("keydown", onPressEscape);
   document.body.classList.remove("show-modal");
}