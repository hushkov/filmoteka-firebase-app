import singleFilmTpl from '../templates/singleFilm.hbs';

function updateMarkup(data) {
  const container = document.querySelector('.js-container');
  const markup = singleFilmTpl(data);
  container.insertAdjacentHTML('beforeend', markup);
}

export default updateMarkup;
