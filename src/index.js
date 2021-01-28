import './main.scss';
import './js/components/refs';
import './js/components/apiService';
import apiService from './js/components/apiService';
import singleFilmMarkup from './js/components/singleFilmMarkup';

console.log();
const input = document.querySelector('.input');
input.addEventListener('input', handleInput);

function handleInput(e) {
  const searchQuery = e.target.value;
  apiService.query = searchQuery;
  apiService.fetchMovies().then(data => singleFilmMarkup(data));
}
