import api from '../components/apiService';
import template from '../templates/mainCards.hbs';

const ul = document.querySelector('.js-ul-film');

api.fetchMovies().then(data => {
  const render = template(data);
  ul.insertAdjacentHTML('beforeend', render);
});
