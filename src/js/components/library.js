import listOfAddedMovies from '../composables/mainCards';

// const refs = {
//   watchedBtnEl: document.querySelector('.wwatched'),
//   queueBtnEl: document.querySelector('.qqueue'),
//   movieListEL: document.querySelector('.movieList'),
//   paginationContainer: document.getElementById('tui-pagination-container'),
// };

// // вешаем события по клику
// refs.watchedBtnEl.addEventListener('click', onWatchedBtnClick);
// refs.queueBtnEl.addEventListener('click', onQueueBtnClick);

// function onWatchedBtnClick() {
//   refs.watchedBtnEl.classList.add('active');
//   refs.queueBtnEl.classList.remove('active');
//   clearMoviesList();

//   if (WATCHED_ARR === null || WATCHED_ARR.length === 0) {
//     refs.movieListEl.innerHTML = '<p>Nothing to watch here.</p>';
//     refs.paginationContainer.innerHTML = '';

//     return;
//   }

//   renderLibraryResults(WATCHED_ARR);
// }
// onWatchedBtnClick();

// function onQueueBtnClick() {
//   refs.watchedBtnEl.classList.remove('active');
//   refs.queueBtnEl.classList.add('active');
//   clearMoviesList();

//   if (QUEUE_ARR === null || QUEUE_ARR.length === 0) {
//     refs.movieListEl.innerHTML = '<p>Nothing in the queue.</p>';
//     refs.paginationContainer.innerHTML = '';

//     return;
//   }

//   renderLibraryResults(QUEUE_ARR);
// }

// onQueueBtnClick();

// const refs = {
//   const content = document.querySelector("#content");
//   const buttons = document.querySelector(".js-buttons");
// }
// const MyLibrary = {
//   getWatched() {
//     const data = JSON.parse(localStorage.getItem("watched")) || [];
//     refs.content.innerHTML = "";
//     if (data.length === 0) {
//       placeholder(refs.content, "watched");
//     }
//     this.myLibraryMarkUp(data, refs.content);
//   },

//   getQueue() {
//     const data = JSON.parse(localStorage.getItem("queue")) || [];
//     refs.content.innerHTML = "";
//     if (data.length === 0) {
//       placeholder(refs.content, "queue");
//     }
//     this.myLibraryMarkUp(data, refs.content);
//      },

//   myLibraryMarkUp(data, ref) {
//     const newData = data.map((item) => {
//       item.release_date = item.release_date.slice(0, 4);
//       return item;
//     });
//     const markUp = libraryPage(newData);
//     ref.insertAdjacentHTML("beforeend", markUp);
//   },

//   init() {
//     refs.form.classList.add("none");
//     refs.buttonBox.innerHTML = "";

//     const watchedButton =

//     watchedButton.classList.add("library_button");
//     watchedButton.classList.add("library_button--active");

//     watchedButton.addEventListener("click", () => {
//       queueButton.classList.remove("library_button--active");
//       watchedButton.classList.add("library_button--active");
//       this.getWatched();
//     });

//     const queueButton =
//       queueButton.classList.add("library_button");
//       queueButton.addEventListener("click", () => {
//       watchedButton.classList.remove("library_button--active");
//       queueButton.classList.add("library_button--active");
//       this.getQueue();
//     });

//     const buttonsMarkup = [watchedButton, queueButton];
//     refs.buttons.append(...buttonsMarkup);

//     this.getWatched();
//   },
// };

// const placeholder = (target, libr = '') => {
//   const placeholder = document.createElement('div');
//   const Markup =
//     `<h2 class="placeholder-watched">Please add some movies to <span class="${libr} lib">${libr}</span>!</h2>`;
//   placeholder.innerHTML = Markup;
//   placeholder.classList.add('placeholder__wrapper');
//   target.append(placeholder);
// }
