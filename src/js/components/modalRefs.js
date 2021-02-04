const modalRefs = {
  bodyClass: document.body.classList,
  openFilmModalBtn: document.querySelector('.js-section-film'),
  openSignupModalBtn: document.querySelector('a[data-target="modal-signup"]'),
  openLoginModalBtn: document.querySelector('a[data-target="modal-login"]'),
  openFooterModalBtn: document.querySelector('a[data-open="footer"]'),
  modalContentRef: document.querySelector('.modal-content'),
  closeModalBtn: document.querySelector('button[data-close-modal]'),
  backdropRef: document.querySelector('.js-backdrop'),

  closeModal: document.querySelector('.js-backdrop').childNodes[1]
    .childNodes[3],
};

export default modalRefs;
