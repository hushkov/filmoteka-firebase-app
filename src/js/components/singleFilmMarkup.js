import singleFilmTpl from '../templates/singleFilm.hbs';

const container = document.querySelector('.film-container');

function updateMarkup(data) {
  const markup = singleFilmTpl(data);
  container.innerHTML = '';
  container.insertAdjacentHTML('beforeend', markup);
}

export default updateMarkup;
