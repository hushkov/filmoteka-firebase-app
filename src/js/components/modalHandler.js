import signupMarkup from '../templates/modal-signup-markup.hbs';
import loginMarkup from '../templates/modal-login-markup.hbs';
import footerMarkup from '../templates/modal-footer-markup.hbs';
import filmMarkup from '../templates/modal-film-markup.hbs';
import rfs from './modalRefs.js';
import refs from './refs';

rfs.openFilmModalBtn.addEventListener("click", onOpenModal);
// rfs.openSignupModalBtn.addEventListener("click", onOpenModal);
// rfs.openLoginModalBtn.addEventListener("click", onOpenModal);
rfs.openFooterModalBtn.addEventListener("click", onOpenModal);
rfs.closeModalBtn.addEventListener("click", onCloseModal);
rfs.backdropRef.addEventListener("click", onBackdropClick);

// ======= Open Modal =======

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
  };

  window.addEventListener('keydown', onPressEscape);
};

// Update Modal Markup
function updateModalMarkup(fn, data, dataOpen) {
  dataOpen === 'film'
    ? (rfs.modalContentRef.innerHTML = fn(data))
    : (rfs.modalContentRef.innerHTML = fn());
  
  rfs.closeModalBtn.classList.remove('hidden');
};

// ======= Close Modal =======

// Close Modal by backdrop
function onBackdropClick(e) {
  if (e.target === e.currentTarget) {
    onCloseModal();
  }
}

// Close Modal by Esc
function onPressEscape(e) {
  if (e.code === 'Escape') {
    onCloseModal();
  }
}

// Close Modal
function onCloseModal() {
  rfs.bodyClass.remove("show-modal-film");
  rfs.bodyClass.remove("show-modal-signup");
  rfs.bodyClass.remove("show-modal-footer");

  rfs.closeModalBtn.classList.add('hidden');
  window.removeEventListener("keydown", onPressEscape);
};