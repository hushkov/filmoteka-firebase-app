import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import updateMarkup from './singleFilmMarkup';
import apiService from './apiService';

const openModalBtnRef = document.querySelector('button[data-open-modal]');
const modalTemplate = document.querySelector('#modal');

// apiService.getMoviesData().then(data => console.log(data));
// const modalTemplate = apiService
//   .getMoviesData()
//   .then(data => updateMarkup(data));

const instance = basicLightbox.create(modalTemplate, {
  onShow: instance => {
    const closeModalBtnRef = instance
      .element()
      .querySelector('button[data-close-modal]');

    closeModalBtnRef.onclick = instance.close;
  },
});

openModalBtnRef.addEventListener('click', instance.show);
