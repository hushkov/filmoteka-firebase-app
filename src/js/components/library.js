import refs from '../components/refs';
import apiService from './apiService';
import { displayStartPage } from '../composables/mainCards';
import { listOfAddedMovies } from '../composables/mainCards';

listOfAddedMovies(refs.currentMoviesList);

const ul = document.querySelector('.my-library__list');

// refs.watched-btn.addEventListener('click', WatchedBtnClick);
// refs.queue-btn.addEventListener('click', QueueBtnClick);

// function WatchedBtnClick {

// }
//  WatchedBtnClick();

// function QueueBtnClick {

// }
//  QueueBtnClick();
