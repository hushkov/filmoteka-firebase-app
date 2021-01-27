import apiService from './apiService.js';
import myLibTemp from '../templates/my-library.hbs';

const refs = {
  libraryList: document.querySelector('.my-library__list'),
};

const key = '5c34acfe39a6372a620da68979c929b1';

apiService.fetchMovies().then(data => {
  const markup = myLibTemp(data);

  refs.libraryList.insertAdjacentHTML('beforeend', markup);
});

// fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${key}&language=en-US`)
//   .then(data => data.json())
//   .then(e => console.log(e));
