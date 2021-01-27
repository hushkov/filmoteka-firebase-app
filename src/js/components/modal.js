import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import apiService from './apiService';

// === Fetch ===
apiService.fetchMovies().then(({ results }) => {
   console.log(results);
 
   showFilmInfo(results);
});

function showFilmInfo(data) {
   const film = data[0];
   const popularity = Math.round(film.popularity);

   console.log(film.original_name);
   console.log(film.vote_average);
   console.log(film.vote_count);
   console.log(popularity);
   console.log(film.overview);
};

// === Modal ===
const openModalBtnRef = document.querySelector('button[data-open-modal]');
const modalTemplate = document.querySelector('#modal');

const instance = basicLightbox.create(modalTemplate, {
   onShow: instance => {
      const closeModalBtnRef = instance.element().querySelector('button[data-close-modal]');

      closeModalBtnRef.onclick = instance.close
   },
});

openModalBtnRef.addEventListener('click', instance.show);
