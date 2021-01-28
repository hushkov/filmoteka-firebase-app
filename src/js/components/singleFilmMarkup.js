import singleFilmTpl from '../templates/singleFilm.hbs';

function updateMarkup(data) {
  const markup = singleFilmTpl(data);
  container.insertAdjacentHTML('beforeend', markup);
}

export default updateMarkup;
