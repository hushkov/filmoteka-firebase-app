// import filmMarkup from '../templates/modal-film-markup.hbs';
import signupMarkup from '../templates/modal-signup-markup.hbs';
import loginMarkup from '../templates/modal-login-markup.hbs';
import footerMarkup from '../templates/modal-footer-markup.hbs';
import filmMarkup from '../templates/modal-film-markup.hbs';
import refs from './refs';

// // ---

// import filmByID from './singleFilmMarkup.js';

// // ---

const openFilmModalBtn = document.querySelector('.js-section-film');
const openSignupModalBtn = document.querySelector('button[data-open="signup"]');
const openLoginModalBtn = document.querySelector('button[data-open="login"]');
const openFooterModalBtn = document.querySelector('a[data-open="footer"]');
const modalContentRef = document.querySelector('.modal-content');
const closeModalBtn = document.querySelector('button[data-close-modal]');
const backdropRef = document.querySelector(".js-backdrop");

// ---

const trendList = document.querySelector('.js-ul-film');

// ---

openFilmModalBtn.addEventListener("click", onOpenModal);
openSignupModalBtn.addEventListener("click", onOpenModal);
openLoginModalBtn.addEventListener("click", onOpenModal);
openFooterModalBtn.addEventListener("click", onOpenModal);
closeModalBtn.addEventListener("click", onCloseModal);
backdropRef.addEventListener("click", onBackdropClick);

// ---

trendList.addEventListener('click', onOpenModal);

// ---

// Open 
function onOpenModal(event) {
   window.addEventListener("keydown", onPressEscape);
   event.preventDefault();
   // const dataSet = event.target.dataset;
   const targetID = event.target.dataset.id;
   const dataOpen = event.target.dataset.open
   const preferMovie = refs.currentMoviesList.find(({ id }) => targetID == id);

   if (dataOpen === "signup") {
      document.body.classList.add("show-modal-signup");
      updateModalMarkup(signupMarkup);
   } else if (dataOpen === "login") {
      document.body.classList.add("show-modal-signup");
      updateModalMarkup(loginMarkup);
   } else if (dataOpen === "film") {
      document.body.classList.add("show-modal-film");
      updateModalMarkup(filmMarkup, preferMovie, dataOpen);
   } else if (dataOpen === "footer") {
      document.body.classList.add("show-modal-footer");
      updateModalMarkup(footerMarkup);
   }
};

function updateModalMarkup(fn, data, dataOpen) {
   if (dataOpen === "film") {
      // const markup = fn(data);
      modalContentRef.innerHTML = fn(data);
   } else {
      modalContentRef.innerHTML = fn();
   }
   
}

// function updateMarkup(data) {
//    const markup = singleFilmTpl(data);
//    modalContentRef.innerHTML = markup;
// }

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
};

export default modalContentRef;

// modalContentRef.insertAdjacentHTML = apiService.getMoviesData().then(data => filmMarkup(data[0]));