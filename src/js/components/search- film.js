import apiService from './apiService.js';
import myLibTemp from '../templates/my-library.hbs';
// import loaderToggle from './loader';
import { displayStartPage } from '../composables/mainCards';

const refs = {
  searchForm: document.querySelector('#search-form'),
  mainSectionFilm: document.querySelector('.js-section-film'),
  sectionLib: document.querySelector('.my-library'),
  libraryList: document.querySelector('.my-library__list'),
  notification: document.querySelector('.notification'),
};

refs.searchForm.addEventListener('submit', onSearch);

function onSearch(event) {
  event.preventDefault();
  apiService.query = event.currentTarget.elements.query.value;
  apiService.getMoviesData();
  // let total =  apiService.getMoviesData().then((data) => {
  //   return data 
  // })
  // console.log (total)
  displayStartPage();
  
 }
// function notification() {
//   refs.notification.classList.add('active')
// }


