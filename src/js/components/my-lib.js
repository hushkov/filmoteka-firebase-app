import apiService from './apiService.js';
import myLibTemp from '../templates/my-library.hbs';

const refs = {
  libraryList: document.querySelector('.my-library__list'),
};

apiService.fetchMovies().then(data => {
  const markup = myLibTemp(data.results);

  refs.libraryList.insertAdjacentHTML('beforeend', markup);
});

// apiService.getMoviesData().then(data => console.log(data));
