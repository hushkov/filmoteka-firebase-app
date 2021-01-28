import apiService from '../components/apiService';
import template from '../templates/mainCards.hbs';
import Handlebars from 'handlebars';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
// var template = require('tui-code-snippet/domUtil/template');

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

const options = {
  totalItems: 2000,
  itemsPerPage: 4,
  visiblePages: 5,
  page: 1,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
};
const pagination = new Pagination('tui-pagination-container', options);
// pagination.movePageTo(10);

pagination.on('afterMove', function (eventData) {
  // alert('The current page is ' + eventData.page);
  apiService.fetchMovies().then(data => {
    const render = template(data.results, Handlebars); //results Если не будет работать удалить
    ul.insertAdjacentHTML('beforeend', render);
  });
});
