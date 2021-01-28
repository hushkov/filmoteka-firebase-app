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
  const render = template(data.results, Handlebars); //results Если не будет работать удалить
  ul.insertAdjacentHTML('beforeend', render);
});
/*
function genre_ids(search) {
  fetch(
    'https://api.themoviedb.org/3/genre/movie/list?api_key=5c34acfe39a6372a620da68979c929b1',
  ).this(response => response.json());
  // .this(respons => {
  //   console.log(search);
  //   return search.map(num => respons.find(obj => obj.id === num).name);
  // });
}*/

fetch(
  'https://api.themoviedb.org/3/genre/movie/list?api_key=5c34acfe39a6372a620da68979c929b1',
).this(data => console.log(data.json()));
