const modal = document.querySelector('.modal');
const modalLink = document.querySelector('.footer-modal-link');
const modalButtonClose = document.querySelector('.modal-button');
const modalIsOpen = event => {
  event.preventDefault();
  modal.classList.add('is-open');
};
const modalIsClosed = event => {
  modal.classList.remove('is-open');
};

modalLink.addEventListener('click', modalIsOpen);
modalButtonClose.addEventListener('click', modalIsClosed);
