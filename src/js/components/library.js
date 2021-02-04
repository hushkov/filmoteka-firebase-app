import refs from '../components/refs';
import apiService from './apiService';
import { displayStartPage } from '../composables/mainCards';

// listOfAddedMovies();
const ul = document.querySelector('.my-library__list');

function listOfAddedMovies() {
  apiService.query = 'wonder';
  displayStartPage();
  const render = refs.currentMoviesList;
  console.log(render);

  //   console.log(data);
  //   dataOfAddedMovies = data.slice();
  //   eventListner.displayAddList(); //Нужно запускать. оно выставляет какие страницы нужно листать
  //   screen.updateScreenName();
  //   pagination.setTotalItems(data.length);

  //   // data.length = pagination._options.itemsPerPage;
  //   pagination.reset();
  //   // const result = posterEdit(data);
  //   // //загрузка через другой шаблон.
  //   // console.log(result);
  //   const render = library(data.slice(0, pagination._options.itemsPerPage));
  ul.innerHTML = '';
  ul.insertAdjacentHTML('beforeend', render);
}

listOfAddedMovies();
