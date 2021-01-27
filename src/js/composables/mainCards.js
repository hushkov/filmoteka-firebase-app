import api from '../components/apiService';
import template from '../templates/mainCards.hbs';
import Handlebars from 'handlebars';

const ul = document.querySelector('.js-ul-film');

Handlebars.registerHelper('loud', function (aString) {
  if (aString === undefined) return '';
  return aString.substring(0, 4);
});

api.fetchMovies().then(data => {
  const render = template(data, Handlebars);
  ul.insertAdjacentHTML('beforeend', render);
});
