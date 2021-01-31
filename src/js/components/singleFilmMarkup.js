import singleFilmTpl from '../templates/singleFilm.hbs';
import refs from './refs';
import apiService from './apiService';

const container = document.querySelector('.film-container');
const trendList = document.querySelector('.js-ul-film');

function updateMarkup(data) {
  const markup = singleFilmTpl(data);
  container.innerHTML = markup;
}

const filmByID = async e => {
  e.preventDefault();
  const targetID = e.target.dataset.id;
  const preferMovie = refs.currentMoviesList.find(({ id }) => targetID == id);
  updateMarkup(preferMovie);

  // добавление разметки через GET запрос по id

  // apiService.id = targetID;
  // apiService.findMovie().then(data => updateMarkup(data));
};

trendList.addEventListener('click', filmByID);
