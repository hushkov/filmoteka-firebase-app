import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

const openModalBtnRef = document.querySelector('button[data-open-modal]');
const modalTemplate = document.querySelector('#modal');

const instance = basicLightbox.create(modalTemplate, {
   onShow: instance => {
      const closeModalBtnRef = instance.element().querySelector('button[data-close-modal]');

      closeModalBtnRef.onclick = instance.close
   },
});

openModalBtnRef.addEventListener('click', instance.show);
