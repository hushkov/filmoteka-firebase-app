import singleFilmTpl from '../templates/singleFilm.hbs';

const container = document.querySelector('.js-container');

function updateMarkup(data) {
  const markup = singleFilmTpl(data);
  container.insertAdjacentHTML('beforeend', markup);
}

export default updateMarkup;
