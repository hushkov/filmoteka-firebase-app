import apiService from './apiService.js';
import myLibTemp from '../templates/my-library.hbs';

const refs = {
  homeBtn: document.querySelector('.link-home'),
  myLibraryBtn: document.querySelector('.link-library'),
  myLibrary: document.querySelector('.my-library'),
  libraryList: document.querySelector('.my-library__list'),
  watchedBtn: document.querySelector('.watched-btn'),
  queueBtn: document.querySelector('.queue-btn'),
};

// refs.myLibraryBtn.addEventListener('click', event => {
//   event.preventDefault();

//   refs.myLibrary.classList.remove('hidden');

// apiService.getMoviesData().then(data => {
//   // слайс прописан временно(для теста)
//   const markup = myLibTemp(data.slice(0, 9));

//   refs.libraryList.insertAdjacentHTML('beforeend', markup);
// });
// });

// refs.homeBtn.addEventListener('click', event => {
//   refs.myLibrary.classList.add('hidden');
// });
