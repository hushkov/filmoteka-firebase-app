import apiService from '../components/apiService';
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

apiService.fetchMovies().then(data => {
  const render = template(data.results, Handlebars); //results Если не будет работать удалить
  ul.insertAdjacentHTML('beforeend', render);
});
