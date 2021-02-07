import { listOfAddedMovies, displayStartPage } from '../composables/mainCards';
import { projectAuth } from '../../firebase/config';
import { projectFirestore } from '../../firebase/config';
import { spinnerOn, spinnerOff } from './spinnerOnOff';
import showStackBarTop from './pnotify';
import globalRefs from '../components/refs';

let user = null;
let libraryQueue = [];
let libraryWatched = [];
const watchedBtn = document.querySelector('.bottom-header .watched-btn');
const queueBtn = document.querySelector('.bottom-header .queue-btn');
const headerAll = document.querySelector('.header');
const mainUL = document.querySelector('.js-ul-film');
const mainError = document.querySelector('#mainError');
const vueChat = document.querySelector('#vue-app');
const mainFilmSection = document.querySelector('.js-section-film');
const chatIcon = document.querySelector('#chat-icon');

headerAll.addEventListener('click', renderCollection);

async function getCollection(collection, lib, isShowSpinner = true) {
  if (isShowSpinner) {
    spinnerOn();
  }
  const unsubscribe = await projectFirestore
    .collection(collection)
    .where(`userId`, '==', user.uid)
    .get()
    .then(snap => {
      snap.forEach(doc => {
        lib.push({ ...doc.data(), idDoc: doc.id });
      });
    })
    .finally(err => {
      spinnerOff();
    });
}

projectAuth.onAuthStateChanged(_user => {
  if (_user) {
    user = _user;
    getFullLibrary(false);
  } else {
    libraryQueue = [];
    libraryWatched = [];
    globalRefs.fullLibrary = [];

    // listOfAddedMovies(libraryQueue);
  }
});

async function getFullLibrary(isShowSpinner) {
  globalRefs.fullLibrary = [];
  await getCollection('queue', globalRefs.fullLibrary, isShowSpinner);
  await getCollection('watched', globalRefs.fullLibrary, isShowSpinner);
}

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
    vueChat.classList.add('hidden');
    chatIcon.classList.remove('active-chat');
    mainFilmSection.classList.remove('hidden');
    queueBtn.classList.add('active-lib-btn');
    watchedBtn.classList.remove('active-lib-btn');
    mainError.style.opacity = '0';
    renderQueue();
    if (!user) {
      notUser();
    }
  } else if (target.collection === 'watched') {
    queueBtn.classList.remove('active-lib-btn');
    watchedBtn.classList.add('active-lib-btn');
    renderWatched();
    if (!user) {
      notUser();
    }
  } else if (target.collection === 'queue') {
    queueBtn.classList.add('active-lib-btn');
    watchedBtn.classList.remove('active-lib-btn');
    renderQueue();
    if (!user) {
      notUser();
    }
  } else if (target.collection === 'home') {
    displayStartPage();
    vueChat.classList.add('hidden');
    chatIcon.classList.remove('active-chat');
    mainFilmSection.classList.remove('hidden');
  }

  // if (target.chat) {
  //   mainUL.classList.add('hidden');
  //   vueChat.classList.remove('hidden');
  // }
  // else {
  //   mainUL.classList.add('hidden');
  //   vueChat.classList.add('hidden');
  // }

  function notUser() {
    showStackBarTop('error');
    spinnerOff();
    listOfAddedMovies(libraryQueue);
    mainUL.innerHTML =
      '<h3 style="margin: 0 auto;">Please pass authentification</h3>';
  }
}

export { getFullLibrary, getCollection };
