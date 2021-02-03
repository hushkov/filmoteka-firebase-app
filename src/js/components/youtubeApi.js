import _throttle from 'lodash.throttle';
import myModal from './modal-trailer.js';
import showNotify from './trailer-notification.js';

const refs = {
  main: document.querySelector('main'),
  frameWrapper: document.querySelector('.modal-youtube__window'),
  iframe: document.querySelector('.modal-youtube__frame'),
  modalContent: document.querySelector('.modal-content'),
};

const apiYoutube = {
  apiKey: '5c34acfe39a6372a620da68979c929b1',

  getMovieTrailer(id) {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${this.apiKey}`,
    )
      .then(response => response.json())
      .then(({ results }) => {
        const isSuccess = !Array.isArray(results) || results.length === 0;

        if (isSuccess) {
          showNotify();
        } else {
          const { key } = results[0];

          this.setUrlTrailer(key);
        }
      });
  },

  setUrlTrailer(key) {
    const url = `https://www.youtube.com/embed/${key}`;

    myModal(url).open();
  },
};

refs.modalContent.addEventListener(
  'click',
  _throttle(event => {
    const movieId = event.target.dataset.id;

    if (event.target.id === 'modal-trailer-youtube') {
      apiYoutube.getMovieTrailer(movieId);
    }
  }, 2100),
);
