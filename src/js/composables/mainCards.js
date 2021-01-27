import api from '../components/apiService';
import template from '../templates/mainCards.hbs';
import Handlebars from 'handlebars';

const ul = document.querySelector('.js-ul-film');
//Редактирования даты
Handlebars.registerHelper('dataEdit', function (aString) {
  if (aString === undefined) return '';
  return aString.substring(0, 4);
});
//Добавить текст в вверхний регистр
Handlebars.registerHelper('upper', function (aString) {
  if (aString === undefined) return '';
  return aString.toUpperCase();
});

api.fetchMovies().then(data => {
  const render = template(data, Handlebars);
  ul.insertAdjacentHTML('beforeend', render);
});
