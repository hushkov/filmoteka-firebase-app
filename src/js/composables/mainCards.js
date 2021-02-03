import apiService from '../components/apiService';
import template from '../templates/mainCards.hbs';
import library from '../templates/my-library.hbs';
import Handlebars from 'handlebars';
import Pagination from 'tui-pagination';
// import 'tui-pagination/dist/tui-pagination.css';
import refs from '../components/refs';
const ul = document.querySelector('.js-ul-film');
const body = document.querySelector('body');
let dataOfAddedMovies = null;

const eventListner = {
  startPage: false,
  addList: false,
  displayStartPage() {
    this.startPage = true;
    this.addList = false;
  },
  displayAddList() {
    this.startPage = false;
    this.addList = true;
  },
  displayPage() {
    if (this.startPage) displayStartPage();
    else if (this.addList) listOfAddedMovies();
  },
};

const options = {
  totalItems: 1,
  itemsPerPage: 4,
  visiblePages: 5,
  page: 1,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  template: {
    page: '<a href="#" class="tui-page-btn">{{page}}</a>',
    currentPage:
      '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
    moveButton:
      '<a href="#" class="tui-page-btn tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</a>',
    disabledMoveButton:
      '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</span>',
    moreButton:
      '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</a>',
  },
};

const pagination = new Pagination('tui-pagination-container', options);

const screen = {
  name: null,
  updateScreenName: function () {
    const width = window.innerWidth;

    if (width < 768) {
      if (this.name !== 'telephone') {
        this.name = 'telephone';
        pagination.setItemsPerPage(4);
        return true;
      }
    } else if (width < 1024) {
      if (this.name !== 'tablet') {
        this.name = 'tablet';
        pagination.setItemsPerPage(8);
        return true;
      }
    } else if (this.name !== 'monitor') {
      this.name = 'monitor';
      pagination.setItemsPerPage(9);
      return true;
    }
  },
};

//Добавить текст в вверхний регистр
Handlebars.registerHelper('upper', function (aString) {
  if (aString === undefined) return '';
  return aString.toUpperCase();
});

//создание страницы №1
function displayStartPage() {
  eventListner.displayStartPage();

  apiService.page = 1;
  screen.updateScreenName();
  apiService.getMoviesData().then(data => {
    pagination.setTotalItems(data[20].totalResults);
    pagination.reset();
    data.length = pagination._options.itemsPerPage;
    const result = posterEdit(data);
    const render = template(result, Handlebars);
    ul.innerHTML = '';
    ul.insertAdjacentHTML('beforeend', render);
  });
}

//возвращаем отредактированый объект с ссылками на картинки
function posterEdit(obj) {
  const result = obj.map(arr => {
    const arr1 = { ...arr };
    if (arr1.poster_path === null || arr1.poster_path === undefined) {
      arr1.poster_path = '../../images/poster-not-avalible.jpg';
      // console.log('Закомментировал posterImg');
    } else {
      arr1.poster_path = 'https://image.tmdb.org/t/p/w300' + arr1.poster_path;
    }
    return arr1;
  });
  // ================ Привет, не удаляй^^ =========================
  refs.currentMoviesList = [...result];
  // ==============================================================
  return result;
}

///создание страницы Во время выбора страницы
function generatePage(indexStartObj, itemsPerPage, eventData) {
  const indexNumber = parseInt(
    (eventData.page * itemsPerPage - itemsPerPage + 1) / 20 + 1,
  ); //Определяем номер страницы для отрисовки
  apiService.page = indexNumber;
  const page1 = apiService.getMoviesData();
  apiService.page = indexNumber + 1;
  const page2 = apiService.getMoviesData();
  Promise.all([page1, page2]).then(response => {
    response[0].length = 20;
    response[1].length = 20;
    const data = [...response[0], ...response[1]].slice(
      indexStartObj,
      indexStartObj + itemsPerPage,
    );

    const result = posterEdit(data);
    const render = template(result, Handlebars);
    ul.innerHTML = '';
    ul.insertAdjacentHTML('beforeend', render);
  });
}

//Создаем страницы добавленных фильмов. //передавать нужно Номер страницы и количество карточек
function generatePageOfAddedMovies(page, call) {
  const result = dataOfAddedMovies.slice(page * call - call, page * call);
  const render = library(result);
  ul.innerHTML = '';
  ul.insertAdjacentHTML('beforeend', render);
}

/////////Срабатывание пагинации во время выбора страницы //eventData.page - номер страницы на которую нажал пользователь
pagination.on('afterMove', async function (eventData) {
  // alert('The current page is ' + eventData.page);
  const itemsPerPage = pagination._options.itemsPerPage; // Сколько карточек на странице должно быть
  const totalItems = pagination._options.totalItems;
  let indexStartObj = 1;
  if (screen.name === 'telephone') {
    //Вызывается при условии что сейчас нужно показывать добавленные фильмы
    if (eventListner.addList) {
      generatePageOfAddedMovies(eventData.page, 4);
      return;
    }
    indexStartObj = parseInt(((eventData.page - 1) * 4) % 20); //число 4 это число карточек
    const indexNumber = parseInt(
      (eventData.page * itemsPerPage - itemsPerPage + 1) / 20 + 1,
    );
    apiService.page = indexNumber;
    apiService.getMoviesData().then(response => {
      const data = response.slice(indexStartObj, indexStartObj + itemsPerPage);
      const render = template(data, Handlebars);
      ul.innerHTML = '';
      // ul.insertAdjacentHTML('beforeend', render);
    });
    generatePage(indexStartObj, itemsPerPage, eventData);
  } else if (screen.name === 'tablet') {
    //Вызывается при условии что сейчас нужно показывать добавленные фильмы
    if (eventListner.addList) {
      generatePageOfAddedMovies(eventData.page, 8);
      return;
    }
    indexStartObj = parseInt(((eventData.page - 1) * 8) % 20); //число 8 это число карточек
    generatePage(indexStartObj, itemsPerPage, eventData);
  } else if (screen.name === 'monitor') {
    //Вызывается при условии что сейчас нужно показывать добавленные фильмы
    if (eventListner.addList) {
      generatePageOfAddedMovies(eventData.page, 9);
      return;
    }
    indexStartObj = parseInt(((eventData.page - 1) * 9) % 20); //число 9 это число карточек
    generatePage(indexStartObj, itemsPerPage, eventData);
  }
});

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

// Запускает функцию если изменился размер.
window.addEventListener('optimizedResize', eventDisplayPage);

function eventDisplayPage(event) {
  //  console.log(event.target.innerWidth);
  ///Проверяет, если изменился экран, тогда все обновится и страницы сбросятся.
  if (screen.updateScreenName()) {
    eventListner.displayPage();
  }
}

//отображает  добавленные фильмы
function listOfAddedMovies(data = dataOfAddedMovies) {
  // console.log(data);
  dataOfAddedMovies = data.slice();
  eventListner.displayAddList(); //Нужно запускать. оно выставляет какие страницы нужно листать
  screen.updateScreenName();
  pagination.setTotalItems(data.length);

  // data.length = pagination._options.itemsPerPage;
  pagination.reset();
  // const result = posterEdit(data);
  // //загрузка через другой шаблон.
  // console.log(result);
  const render = library(data.slice(0, pagination._options.itemsPerPage));
  ul.innerHTML = '';
  ul.insertAdjacentHTML('beforeend', render);
}

export { displayStartPage, listOfAddedMovies };

// apiService.query = 'car';
// console.log(apiService.getMoviesData());
