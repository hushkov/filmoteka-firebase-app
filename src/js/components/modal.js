import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import signMarkup from '../templates/modal-signup-markup.hbs';

// console.log(signMarkup());

// const signupFormRef = document.querySelector('.signupForm');
// signupFormRef.insertAdjacentHTML('beforeend', signMarkup())

// /*
// const openModalBtnRef = document.querySelector('button[data-open-modal]');
// const modalRef = document.querySelector('.modal');

const instance = basicLightbox.create(`
   <div class="modal">
      <div class="modalContent"></div>
      <a>Close</a>
   </div>
   `, {
   onShow: (instance) => {
         instance.element().querySelector('a').onclick = instance.close;
         const modalRef = instance.element().querySelector('.modalContent');
         modalRef.innerHTML = signMarkup();
         console.log(instance.element());
   },
});

function markupHandler() {
   const modalRef = instance.element().querySelector('.modalContent');
   const visible = instance.visible();
   console.log(visible);
   console.log(target);

   modalRef.innerHTML = signMarkup();
   // if () {
   //       modalRef.innerHTML = signMarkup();
   // }
}

// openModalBtnRef.addEventListener('click', instance.show);

// function aaa() {
//    console.log("aaa");
// }

// */
/* =========

const openModalBtnRef = document.querySelector('button[data-open-modal]');

const instance = basicLightbox.create(`
    <div class="modal">
      <form class="signupForm" id="signupForm-js">
         <h3>Sign up</h3>
         <input type="text" name="displayName" placeholder="Display Name" id="displayName-js" />
         <input type="email" name="email" placeholder="Email" id="email-js" />
         <input type="password" name="password" placeholder="Password" id="password-js" />
         <!-- <div v-if="error" class="error">{{ error }}</div> -->
         <button id="signupBtn-js">Sign up</button>
         <!-- <button v-if="isPending" disabled>Loading...</button> -->
      </form>
      <a>Close</a>
    </div>
`, {
    onShow: (instance) => {
        instance.element().querySelector('a').onclick = instance.close
    }
})

openModalBtnRef.addEventListener('click', instance.show);

*/
/* ========

const openModalBtnRef = document.querySelector('button[data-open-modal]');
const modalTemplate = document.querySelector('#modal');

const instance = basicLightbox.create(modalTemplate, {
   onShow(instance) {
      const closeModalBtnRef = getCloseModalBtnRef(instance);
      closeModalBtnRef.addEventListener('click', instance.close);

      window.addEventListener('keydown', closeModalOnEsc);
   },
   onClose(instance) {
      const closeModalBtnRef = getCloseModalBtnRef(instance);
      closeModalBtnRef.removeEventListener('click', instance.close);
   },
});

openModalBtnRef.addEventListener('click', instance.show);

function getCloseModalBtnRef(parent) {
   return parent.element().querySelector('button[data-close-modal]')
};

function closeModalOnEsc(e) {
   if (e.code === 'Escape') {
      instance.close();
      window.removeEventListener('keydown', closeModalOnEsc);
   };
};

*/