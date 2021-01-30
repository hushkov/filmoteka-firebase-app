import apiService from '../components/apiService';
import template from '../templates/mainCards.hbs';
import Handlebars from 'handlebars';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

import refs from '../components/refs';

const ul = document.querySelector('.js-ul-film');
const body = document.querySelector('body');
var startDisplay = true;
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
  template: {
    page: '<a href="#" class="tui-page-btn">{{page}}</a>',
    currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
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

//Добавить текст в вверхний регистр
Handlebars.registerHelper('upper', function (aString) {
  if (aString === undefined) return '';
  return aString.toUpperCase();
});

//создание страницы
function displayStartPage() {
  startDisplay = true;
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
    // ================ Привет, не удаляй^^ =========================
    refs.currentMoviesList = [...data];
    // ==============================================================
    pagination.setTotalItems(data[20].totalResults);
    pagination.reset();
    // console.log(pagination._options.itemsPerPage);
    data.length = pagination._options.itemsPerPage;
    const render = template(data, Handlebars);
    ul.innerHTML = '';
    ul.insertAdjacentHTML('beforeend', render);
  });
}

/////////////////////////

// displayPage();

//////////////////////////////

function generatePage(indexStartObj, itemsPerPage, eventData) {
  const indexNumber = parseInt(
    (eventData.page * itemsPerPage - itemsPerPage + 1) / 20 + 1,
  );
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

    // ================ Привет, не удаляй^^ =========================
    refs.currentMoviesList = [...data];
    // ==============================================================
    const render = template(data, Handlebars); //results Если не будет работать удалить
    ul.innerHTML = '';
    ul.insertAdjacentHTML('beforeend', render);
  });
}

pagination.on('afterMove', async function (eventData) {
  // alert('The current page is ' + eventData.page);
  const itemsPerPage = pagination._options.itemsPerPage;
  const totalItems = pagination._options.totalItems;
  let indexStartObj = 1;
  if (screen.name === 'telephone') {
    indexStartObj = parseInt(((eventData.page - 1) * 4) % 20); //число 4 это число карточек
    const indexNumber = parseInt(
      (eventData.page * itemsPerPage - itemsPerPage + 1) / 20 + 1,
    );
    apiService.page = indexNumber;
    apiService.getMoviesData().then(response => {
      const data = response.slice(indexStartObj, indexStartObj + itemsPerPage);
      // console.log(data);
      const render = template(data, Handlebars);
      ul.innerHTML = '';
      ul.insertAdjacentHTML('beforeend', render);
    });
  } else if (screen.name === 'tablet') {
    indexStartObj = parseInt(((eventData.page - 1) * 8) % 20); //число 8 это число карточек
    generatePage(indexStartObj, itemsPerPage, eventData);
  } else if (screen.name === 'monitor') {
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

// handle event
window.addEventListener('optimizedResize', eventStartPage);

function eventStartPage(event) {
  //  console.log(event.target.innerWidth);
  if (screen.updateScreenName()) displayStartPage();
}

function listOfAddedMovies(arr) {}

export { displayStartPage, listOfAddedMovies };
