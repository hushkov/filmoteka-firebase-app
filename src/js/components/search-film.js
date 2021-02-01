import apiService from './apiService.js'
import myLibTemp from '../templates/my-library.hbs';
// import loaderToggle from './loader';

const refs = {
  searchForm: document.querySelector('#search-form'),
  mainSectionFilm: document.querySelector('.js-section-film'),
  sectionLib: document.querySelector('.my-library'),
  libraryList: document.querySelector('.my-library__list'),
}



refs.searchForm.addEventListener('submit', onSearch);

function onSearch(event) {
  event.preventDefault();
  
   refs.mainSectionFilm.classList.add('hidden');
  refs.sectionLib.classList.remove('hidden');
  apiService.query = event.currentTarget.elements.query.value ;
   
  apiService.getMoviesData().then(data => {
    const markup = myLibTemp(data.slice(0, 3));
  })
    refs.libraryList.innerHTML = '';
    refs.libraryList.insertAdjacentHTML('beforeend', markup);
  
};