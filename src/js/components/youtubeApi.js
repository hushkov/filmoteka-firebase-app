const refs = {
  main: document.querySelector('main'),
  frameWrapper: document.querySelector('.box-trailer'),
  iframe: document.querySelector('.movie-trailer'),
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
          console.log('Trailer not found');
        } else {
          const { key } = results[0];

          this.setUrlTrailer(key);
        }
      });
  },

  setUrlTrailer(key) {
    refs.iframe.setAttribute('src', `https://www.youtube.com/embed/${key}`);
  },
};

// Test ----------->>>>>>>
refs.main.addEventListener('click', event => {
  const movieId = event.target.dataset.id;

  if (event.target.nodeName === 'IMG') {
    apiYoutube.getMovieTrailer(movieId);
  }
});

//  <<<<<<<<<----------------
