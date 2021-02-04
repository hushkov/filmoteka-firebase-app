import mainRefs from './refs';

const refs = {
  home: document.querySelector('.link-home'),
  library: document.querySelector('.link-library'),
  header: document.querySelector('.header'),
  search: document.querySelector('.search-form'),
  bottom: document.querySelector('.bottom-header'),
};

refs.home.addEventListener('click', onHome);
refs.library.addEventListener('click', onlibrary);

function onHome(e) {
  e.preventDefault();

  refs.header.classList.replace('header-library', 'header-home');
  refs.search.classList.remove('visually-hidden');
  refs.bottom.classList.add('visually-hidden');
  refs.library.classList.remove('current');
  refs.home.classList.add('current');
}

function onlibrary(e) {
  e.preventDefault();

  refs.header.classList.replace('header-home', 'header-library');
  refs.bottom.classList.remove('visually-hidden');
  refs.search.classList.add('visually-hidden');
  refs.home.classList.remove('current');
  refs.library.classList.add('current');
}
