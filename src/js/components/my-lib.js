import apiService from './apiService.js';
import myLibTemp from '../templates/my-library.hbs';

const refs = {
  libraryList: document.querySelector('.my-library__list'),
};

apiService.fetchMovies().then(data => {
  const markup = myLibTemp(data);

  refs.libraryList.insertAdjacentHTML('beforeend', markup);
});
