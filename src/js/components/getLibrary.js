import refs from '../components/refs';
import getCollection from '../composables/getCollection';
import getUser from '../composables/getUser';
import { listOfAddedMovies } from '../composables/mainCards';

const movieList = document.querySelector('.getLib');
let libArray = [];

const getLibrary = data => {
  if (data.length) {
    libArray = data.map(doc => doc.data());
  }

  if (data.length) {
    let html = [];
    data.forEach(doc => {
      const movie = doc.data();

      html.push(movie);
    });
    // movieList.innerHTML = html;

    // console.log('html:', html);
  } else {
  }
  // console.log('lib: ', libArray);
  // listOfAddedMovies(libArray);
};

export default getLibrary;
