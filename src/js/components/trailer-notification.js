const markupNotification = `
    <div class="wrapper-trailer-notification">
        <p class="material-icons trailer-notification trailer-notification--sign">error</p>
        <p class="trailer-notification trailer-notification--text">No trailer found, please try again later.</p>
    </div>`;

const showNotify = () => {
  const trailerImgRef = document.querySelector('.modal-section__thumb');

  trailerImgRef.insertAdjacentHTML('afterbegin', markupNotification);

  setTimeout(() => {
    const wrapperTrailer = document.querySelector(
      '.wrapper-trailer-notification',
    );

    wrapperTrailer.remove();
  }, 2000);
};

export default showNotify;
