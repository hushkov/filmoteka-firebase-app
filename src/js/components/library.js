const refs = {
  watchedBtnEl: document.querySelector('.wwatched'),
  queueBtnEl: document.querySelector('.qqueue'),
  movieListEL: document.querySelector('.movieList'),
  paginationContainer: document.getElementById('tui-pagination-container'),
};

const WATCHED_ARR = JSON.parse(localStorage.getItem('watched-movie-list'));
const QUEUE_ARR = JSON.parse(localStorage.getItem('queue-movie-list'));

// вешаем события по клику
refs.watchedBtnEl.addEventListener('click', onWatchedBtnClick);
refs.queueBtnEl.addEventListener('click', onQueueBtnClick);

function onWatchedBtnClick() {
  refs.watchedBtnEl.classList.add('active');
  refs.queueBtnEl.classList.remove('active');
  clearMoviesList();

  if (WATCHED_ARR === null || WATCHED_ARR.length === 0) {
    refs.movieListEl.innerHTML = '<p>Nothing to watch here.</p>';
    refs.paginationContainer.innerHTML = '';

    return;
  }

  renderLibraryResults(WATCHED_ARR);
}
onWatchedBtnClick();

function onQueueBtnClick() {
  refs.watchedBtnEl.classList.remove('active');
  refs.queueBtnEl.classList.add('active');
  clearMoviesList();

  if (QUEUE_ARR === null || QUEUE_ARR.length === 0) {
    refs.movieListEl.innerHTML = '<p>Nothing in the queue.</p>';
    refs.paginationContainer.innerHTML = '';

    return;
  }

  renderLibraryResults(QUEUE_ARR);
}

onQueueBtnClick();
