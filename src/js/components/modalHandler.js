import signupMarkup from '../templates/modal-signup-markup.hbs';
import loginMarkup from '../templates/modal-login-markup.hbs';
import footerMarkup from '../templates/modal-footer-markup.hbs';
import filmMarkup from '../templates/modal-film-markup.hbs';
import similarFilmMarkup from '../templates/similar-film-markup.hbs';
import apiService from './apiService.js';
import rfs from './modalRefs.js';
import refs from './refs';

//===============================================================
import handleLogin from './handleLogin';
import handleSignup from './handleSignup';

//===============================================================

rfs.openFilmModalBtn.addEventListener('click', onOpenModal);
rfs.openSignupModalBtn.addEventListener('click', onOpenModal);
rfs.openLoginModalBtn.addEventListener('click', onOpenModal);
rfs.openFooterModalBtn.addEventListener('click', onOpenModal);
rfs.closeModalBtn.addEventListener('click', onCloseModal);
rfs.backdropRef.addEventListener('click', onBackdropClick);

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
      const signupForm = document.querySelector('#signup-form');
      const clickLogin = document.querySelector(
        'span[data-click="click-login"]',
      );
      console.log(signupForm);
      signupForm.addEventListener('submit', handleSignup);
      clickLogin.addEventListener('click', () => {
        updateModalMarkup(loginMarkup);
      });
      break;
    case 'login':
      rfs.bodyClass.add('show-modal-signup');
      updateModalMarkup(loginMarkup);
      const loginForm = document.querySelector('#login-form');
      const clickSignup = document.querySelector(
        'span[data-click="click-signup"]',
      );
      loginForm.addEventListener('submit', handleLogin);
      clickSignup.addEventListener('click', () => {
        updateModalMarkup(signupMarkup);
      });
      break;
    case 'film':
      rfs.bodyClass.add('show-modal-film');
      updateModalMarkup(filmMarkup, preferMovie, dataOpen);

      appendSimilarMovies(preferMovie);
      break;
    case 'footer':
      rfs.bodyClass.add('show-modal-footer');
      updateModalMarkup(footerMarkup);
      break;
  };

  window.addEventListener('keydown', onPressEscape);
};

// Trailer
function appendSimilarMovies(preferMovie) {
  apiService.fetchSimilarMovies(preferMovie.id).then(data => {
    const movies = [...data.results];
    const showTotalMovies = 5;

    const similarRef = rfs.modalContentRef.querySelector(
      '.modal-meta_similar-movies',
    );
    similarRef.classList.add('hidden');

    let content = '';

    if (movies.length) {
      for (let i = 0; i < showTotalMovies; i++) {
        const movie = movies[i];
        movie.release_date = movie.release_date.substr(0, 4);
        content += similarFilmMarkup(movie);
      }

      similarRef.querySelector(
        '.modal-meta_similar-movies-list',
      ).innerHTML = content;
      similarRef.classList.remove('hidden');
    }
  });
}

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

  rfs.closeModalBtn.classList.add('hidden');
  window.removeEventListener('keydown', onPressEscape);
};

export default onCloseModal;