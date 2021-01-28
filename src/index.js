import './main.scss';
import './js/components/refs';
import './js/components/modal.js';
import './js/components/apiService';
import './js/components/my-lib';
import './js/components/handleSignup';
import apiService from './js/components/apiService';

// console.log();
// const input = document.querySelector('.input');
// input.addEventListener('input', handleInput);

// function handleInput(e) {
//   const searchQuery = e.target.value;
//   apiService.query = searchQuery;
//   apiService.fetchMovies().then(data => console.log(data));
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

// console.log(apiService.fetchMovies());

console.log(apiService.getMoviesData());

import './js/components/handleSignup';

import './js/components/header';
