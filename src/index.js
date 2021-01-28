import './main.scss';
import './js/components/refs';
import './js/components/apiService';
import './js/components/handleSignup';
import apiService from './js/components/apiService';

// console.log();
const input = document.querySelector('.input');
input.addEventListener('input', handleInput);

// function handleInput(e) {
//   // e.preventDefault();
//   const searchQuery = e.target.value;
//   apiService.query = searchQuery; //.elements.query.value;
//   refs.container.innerHTML = '';
//   apiService.fetchMovies().then(data => markup(data));
// }

// apiService.fetchMovies().then(({ results }) =>
//   results.forEach(({ title, name }) => {
//     if (title) {
//       console.log(title);
//     } else {
//       console.log(name);
//     }
//   }),
// );

console.log(apiService.getMoviesData());
