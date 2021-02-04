const myModal = function (url) {
  let destroyed = false;
  const modalWindowMarkup = createModal(url);
  const modal = {
    open() {
      if (destroyed) {
        return;
      }
      modalWindowMarkup.classList.add('open');
    },
    close() {
      modalWindowMarkup.classList.remove('open');
    },
    destroy() {
      modalWindowMarkup.parentNode.removeChild(modalWindowMarkup);
      modalWindowMarkup.removeEventListener('click', listener);
      window.removeEventListener('keydown', listener);

      destroyed = true;
    },
  };
  const listener = event => {
    if (event.target.dataset.close || event.code === 'Escape') {
      modal.close();
      modal.destroy();
    }
  };

  modalWindowMarkup.addEventListener('click', listener);
  window.addEventListener('keydown', listener);

  return modal;
};

function createModal(url) {
  const markup = document.createElement('div');

  markup.classList.add('modal-youtube');
  markup.insertAdjacentHTML(
    'afterbegin',
    `
        <div class="modal-youtube__overlay" data-close="true">
          <div class="modal-youtube__window">
            <span class="modal-youtube__close" data-close="true">&times;</span>
            <iframe class="modal-youtube__frame" src="${url}" frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>
          </div>
        </div>
  `,
  );
  document.body.appendChild(markup);
  return markup;
}

export default myModal;
