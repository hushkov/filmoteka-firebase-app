import fetchMovies from './apiService';
// import photoCard from '../templates/photoCard.hbs';


const formSearch = document.querySelector('#search-form');
// const articlesContainer = document.querySelector('.gallery');
// const loadMoreBtn = document.querySelector('[data-action="load-more"]');
// const noResultMessage = document.querySelector('.notification');

formSearch.addEventListener('submit', onSearch);
// loadMoreBtn.addEventListener('click', onLoadMore);
// articlesContainer.addEventListener('click', onOpenModal);

// const apiService = new fetchMovies();

async function onSearch(event) {
  event.preventDefault();
  
//   try {
//     noResultMessage.classList.add('is-hidden');
//     const inputSearchValue = event.currentTarget.elements.query.value;
//     fetchMovies.query = inputSearchValue;

//     loadMoreBtn.classList.add('is-hidden');

//     fetchMovies.resetPage();
//     clearArticlesContainer();
//     const response = await apiService.fetchMovies();

//     if (response.length === 0) {
//       noResultMessage.classList.remove('is-hidden');
//     } else if (response.length > 0) {
//       appendArticlesMarkup(response);
//       loadMoreBtn.classList.remove('is-hidden');
//     }
//     if (response.length < 12) {
//       loadMoreBtn.classList.add('is-hidden');
//     }
//   } catch (error) {
//     console.log('Ошибка');
//   }
// }

// async function onLoadMore() {
//   try {
//     const response = await imageApiService.fetchImages();
//     console.log(response);

//     appendArticlesMarkup(response);
//     scrollToElement();
//   } catch (error) {
//     console.log('Ошибка');
//   }
// }

// function appendArticlesMarkup(articles) {
//   articlesContainer.insertAdjacentHTML('beforeend', photoCard(articles));
// }

// function clearArticlesContainer() {
//   articlesContainer.innerHTML = '';
// }