import apiService from './apiService.js';
import myLibTemp from '../templates/my-library.hbs';

apiService.fetchMovies().then(data => {
  document
    .querySelector('.my-library__list')
    .insertAdjacentHTML('beforeend', myLibTemp(data));
});
