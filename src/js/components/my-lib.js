import apiService from './apiService.js';
import myLibTemp from '../templates/my-library.hbs';

const refs = {
  libraryList: document.querySelector('.my-library__list'),
};

apiService.getMoviesData().then(data => {
  // слайс прописан временно(для теста)
  const markup = myLibTemp(data.slice(0, 9));

  refs.libraryList.insertAdjacentHTML('beforeend', markup);
});
