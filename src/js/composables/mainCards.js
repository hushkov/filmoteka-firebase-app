import apiService from '../components/apiService';
import template from '../templates/mainCards.hbs';
import Handlebars from 'handlebars';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

const ul = document.querySelector('.js-ul-film');
const body = document.querySelector('body');

const telephone = 768;
const tablet = 1024;

const screen = {
  name: null,
  updateScreenName: function () {
    const width = body.clientWidth;
    if (width < 768) {
      if (this.name !== 'telephone') {
        this.name = 'telephone';
        return true;
      }
    } else if (width < 1024) {
      if (this.name !== 'tablet') {
        this.name = 'tablet';
        return true;
      }
    } else if (this.name !== 'monitor') {
      this.name = 'monitor';
      return true;
    }
  },
};

screen.updateScreenName();
const options = {
  totalItems: 1,
  itemsPerPage: 4,
  visiblePages: 5,
  page: 1,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
};

const pagination = new Pagination('tui-pagination-container', options);

//Редактирования даты
// Handlebars.registerHelper('dataEdit', function (aString) {
//   if (aString === undefined) return '';
//   return aString.substring(0, 4);
// });

//Добавить текст в вверхний регистр
Handlebars.registerHelper('upper', function (aString) {
  if (aString === undefined) return '';
  return aString.toUpperCase();
});

//создание страницы
function displayPage() {
  switch (screen.name) {
    case 'telephone':
      pagination.setItemsPerPage(4);
      break;
    case 'tablet':
      pagination.setItemsPerPage(8);
      break;
    case 'monitor':
      pagination.setItemsPerPage(9);
      break;
  }
  apiService.getMoviesData().then(data => {
    pagination.setTotalItems(data[20].totalResults);
    pagination.reset();
    // console.log(pagination._options.itemsPerPage);
    data.length = pagination._options.itemsPerPage;
    const render = template(data, Handlebars);
    ul.innerHTML = '';
    ul.insertAdjacentHTML('beforeend', render);
  });
}
displayPage();
// console.log(parseInt((1 * 4) % 20));
// pagination.movePageTo(10);
//////////////////////////////
//настройка страниц
// console.log(pagination._options.totalItems);
pagination.on('afterMove', function (eventData) {
  // alert('The current page is ' + eventData.page);
  const itemsPerPage = pagination._options.itemsPerPage;
  const totalItems = pagination._options.totalItems;
  let indexStartObj = 1;
  if (screen.name === 'telephone') {
    indexStartObj = parseInt(((eventData.page - 1) * 4) % 20);
    const indexNumber = parseInt(
      (eventData.page * itemsPerPage - itemsPerPage + 1) / 20 + 1,
    );

    apiService.page = indexNumber;
  }
  apiService.getMoviesData().then(response => {
    // console.log(response);
    // console.log(indexStartObj);
    // console.log(indexStartObj + itemsPerPage + 1);
    const data = response.slice(indexStartObj, indexStartObj + itemsPerPage);
    // console.log(data);
    const render = template(data, Handlebars); //results Если не будет работать удалить
    ul.innerHTML = '';
    ul.insertAdjacentHTML('beforeend', render);
  });
});

// apiService.getMoviesData().then(console.log);

///////////////////////////////////////////////////////
//событие изменение размера экрана
(function () {
  const throttle = function (type, name, obj) {
    obj = obj || window;
    let running = false;
    const func = function () {
      if (running) {
        return;
      }
      running = true;
      requestAnimationFrame(function () {
        obj.dispatchEvent(new CustomEvent(name));
        running = false;
      });
    };
    obj.addEventListener(type, func);
  };

  /* init - you can init any event */
  throttle('resize', 'optimizedResize');
})();

// handle event
window.addEventListener('optimizedResize', function (event) {
  // console.log(event.target.innerWidth);
  if (screen.updateScreenName()) displayPage();
});
