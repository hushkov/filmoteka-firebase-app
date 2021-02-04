import apiService from './apiService.js';
import myLibTemp from '../templates/my-library.hbs';

const refs = {
  mainSectionFilm: document.querySelector('.js-section-film'),
  sectionLib: document.querySelector('.my-library'),
  homeBtn: document.querySelector('.link-home'),
  myLibraryBtn: document.querySelector('.link-library'),
  libraryList: document.querySelector('.my-library__list'),
};

// refs.myLibraryBtn.addEventListener('click', event => {
//   // event.preventDefault();

//   refs.mainSectionFilm.classList.add('hidden');
//   refs.sectionLib.classList.remove('hidden');
// });

// refs.homeBtn.addEventListener('click', event => {
//   refs.sectionLib.classList.add('hidden');
//   refs.mainSectionFilm.classList.remove('hidden');
// });
