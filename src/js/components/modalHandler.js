import signupMarkup from '../templates/modal-signup-markup.hbs';
import loginMarkup from '../templates/modal-login-markup.hbs';
import footerMarkup from '../templates/modal-footer-markup.hbs';
import filmMarkup from '../templates/modal-film-markup.hbs';
import rfs from './modalRefs.js';
import refs from './refs';

rfs.openFilmModalBtn.addEventListener('click', onOpenModal);
// rfs.openSignupModalBtn.addEventListener("click", onOpenModal);
// rfs.openLoginModalBtn.addEventListener("click", onOpenModal);
rfs.openFooterModalBtn.addEventListener('click', onOpenModal);
rfs.closeModalBtn.addEventListener('click', onCloseModal);
rfs.backdropRef.addEventListener('click', onBackdropClick);

// Open
function onOpenModal(e) {
  e.preventDefault();

  const targetID = e.target.dataset.id;
  const dataOpen = e.target.dataset.open;
  const preferMovie = refs.currentMoviesList.find(({ id }) => targetID == id);

  switch (dataOpen) {
    case 'signup':
      rfs.bodyClass.add('show-modal-signup');
      updateModalMarkup(signupMarkup);
      break;
    case 'login':
      rfs.bodyClass.add('show-modal-signup');
      updateModalMarkup(loginMarkup);
      break;
    case 'film':
      rfs.bodyClass.add('show-modal-film');
      updateModalMarkup(filmMarkup, preferMovie, dataOpen);
      break;
    case 'footer':
      rfs.bodyClass.add('show-modal-footer');
      updateModalMarkup(footerMarkup);
      break;
  }

  window.addEventListener('keydown', onPressEscape);
  rfs.closeModal.classList.remove('hidden');
}

// Update Markup
function updateModalMarkup(fn, data, dataOpen) {
  dataOpen === 'film'
    ? (rfs.modalContentRef.innerHTML = fn(data))
    : (rfs.modalContentRef.innerHTML = fn());
}

// Close by backdrop
function onBackdropClick(e) {
  if (e.target === e.currentTarget) {
    onCloseModal();
  }
}

// Close by Esc
function onPressEscape(e) {
  if (e.code === 'Escape') {
    onCloseModal();
  }
}

// Close Modal
function onCloseModal() {
  rfs.bodyClass.remove('show-modal-film');
  rfs.bodyClass.remove('show-modal-signup');
  rfs.bodyClass.remove('show-modal-footer');

  rfs.closeModal.classList.add('hidden');
  rfs.modalContentRef.innerHTML = '';
  window.removeEventListener('keydown', onPressEscape);
}

// === Del --v

// if (dataOpen === "film") {
//    rfs.modalContentRef.innerHTML = fn(data);
// } else {
//    rfs.modalContentRef.innerHTML = fn();
// }

//    if (dataOpen === "signup") {
//       document.body.classList.add("show-modal-signup");
//       updateModalMarkup(signupMarkup);
//    } else if (dataOpen === "login") {
//       document.body.classList.add("show-modal-signup");
//       updateModalMarkup(loginMarkup);
//    } else if (dataOpen === "film") {
//       document.body.classList.add("show-modal-film");
//       updateModalMarkup(filmMarkup, preferMovie, dataOpen);
//    } else if (dataOpen === "footer") {
//       document.body.classList.add("show-modal-footer");
//       updateModalMarkup(footerMarkup);
//    }

// --

// function updateMarkup(data) {
//    const markup = singleFilmTpl(data);
//    modalContentRef.innerHTML = markup;
// }

// --

// modalContentRef.insertAdjacentHTML = apiService.getMoviesData().then(data => filmMarkup(data[0]));

// --
