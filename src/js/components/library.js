const WATCHED_ARR = JSON.parse(localStorage.getItem('watched-movie-list'));
const QUEUE_ARR = JSON.parse(localStorage.getItem('queue-movie-list'));

onWatchedBtnClick();

refs.watchedBtnEl.addEventListener('click', onWatchedBtnClick);
refs.queueBtnEl.addEventListener('click', onQueueBtnClick);

function onWatchedBtnClick() {
  clearMoviesList();

  refs.watchedBtnEl.classList.add('active');
  refs.queueBtnEl.classList.remove('active');

  if (WATCHED_ARR === null || WATCHED_ARR.length === 0) {
    refs.movieListEl.innerHTML = '<p>Nothing to watch.</p>';
    // this.elements.listElem.textContent = '';

    return;
  }

  renderLibraryResults(WATCHED_ARRAY);
}

function onQueueBtnClick() {
  refs.watchedBtnEl.classList.remove('active');
  refs.queueBtnEl.classList.add('active');

  clearMoviesList();

  if (QUEUE_ARR === null || QUEUE_ARR.length === 0) {
    refs.movieListEl.innerHTML = '<p>The queue is empty.</p>';
    // this.elements.listElem.textContent = '';

    return;
  }

  renderLibraryResults(QUEUE_ARR);
}

// function () {
//   const watched = document.querySelector('[data-name="watched"]');
//   const queue = document.querySelector('[data-name="queue"]');

//   const wtch = JSON.parse(localStorage.getItem('watched'));
//   const que = JSON.parse(localStorage.getItem('queue'));

//   let id = document.querySelector('.modal-movie-wrapper').getAttribute('id');

//   if (wtch === null || !wtch.includes(id)) {
//     watched.classList.remove('button-is-active');
//     watched.textContent = 'add to watched';
//   } else {
//     watched.classList.add('button-is-active');
//     watched.textContent = 'delete from watched';
//   }

//   if (que === null || !que.includes(id)) {
//     queue.classList.remove('button-is-active');
//     queue.textContent = 'add to queue';
//   } else {
//     queue.classList.add('button-is-active');
//     queue.textContent = 'delete from queue';
//   }
// }
