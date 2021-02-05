import { listOfAddedMovies, displayStartPage } from '../composables/mainCards';
import { projectAuth } from '../../firebase/config';
import { projectFirestore } from '../../firebase/config';

let user = null;
let libraryQueue = [];
let libraryWatched = [];
const watchedBtn = document.querySelector('.bottom-header .watched-btn');
const queueBtn = document.querySelector('.bottom-header .queue-btn');
const headerAll = document.querySelector('.header');

headerAll.addEventListener('click', renderCollection);

async function getCollection(collection, lib) {
  await projectFirestore
    .collection(collection)
    .where(`userId`, '==', user.uid)
    .get()
    .then(snap => {
      snap.forEach(doc => {
        lib.push(doc.data());
      });
    });
}

projectAuth.onAuthStateChanged(_user => {
  if (_user) {
    user = _user;
  } else {
    const libraryQueue = [];
    const libraryWatched = [];
    // listOfAddedMovies(libraryQueue);
  }
});

async function renderQueue() {
  libraryQueue = [];
  await getCollection('queue', libraryQueue);

  listOfAddedMovies(libraryQueue);
}
async function renderWatched() {
  const libraryWatched = [];
  await getCollection('watched', libraryWatched);
  listOfAddedMovies(libraryWatched);
}

function renderCollection(eve) {
  const target = eve.target.dataset;
  // console.log(target.collection);
  if (target.collection === 'collection') {
    queueBtn.classList.add('active-lib-btn');
    watchedBtn.classList.remove('active-lib-btn');
    renderQueue();
    if (!user) {
      listOfAddedMovies(libraryQueue);
    }
  } else if (target.collection === 'watched') {
    queueBtn.classList.remove('active-lib-btn');
    watchedBtn.classList.add('active-lib-btn');
    renderWatched();
  } else if (target.collection === 'queue') {
    queueBtn.classList.add('active-lib-btn');
    watchedBtn.classList.remove('active-lib-btn');
    renderQueue();
  } else if (target.collection === 'home') {
    displayStartPage();
  }
}
