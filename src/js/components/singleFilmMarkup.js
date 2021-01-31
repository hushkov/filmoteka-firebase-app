import singleFilmTpl from '../templates/singleFilm.hbs';
import refs from './refs';

const container = document.querySelector('.film-container');
const trendList = document.querySelector('.js-ul-film');

function updateMarkup(data) {
  const markup = singleFilmTpl(data);
  container.innerHTML = markup;
  // container.insertAdjacentHTML('beforeend', markup);
}

const filmByID = async e => {
  e.preventDefault();
  const targetID = e.target.dataset.id;

  const preferMovie = refs.currentMoviesList.find(({ id }) => targetID == id);
  // const preferMovie = refs.currentMoviesList.find(({ id }) => targetID == id);
  updateMarkup(preferMovie);
};

trendList.addEventListener('click', filmByID);
