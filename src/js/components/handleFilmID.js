import refs from '../components/refs';
import useCollection from '../composables/useCollection';
import { timestamp } from '../../firebase/config';
import getUser from '../composables/getUser';
import showStackBarTop from './pnotify';
import { getCollection, getFullLibrary } from './getLibrary';
import useDocument from '../composables/useDocument';
import { listOfAddedMovies } from '../composables/mainCards';
import _throttle from 'lodash.throttle';

const trendList = document.querySelector('.js-ul-film');
const modalDescription = document.querySelector('.modal-content');
const changeStyle = document.querySelector('.film-list');

const handleFilmID = async e => {
  e.preventDefault();
  const target = e.target;
  const targetID = e.target.dataset.id;
  const queueBtn = e.target.dataset.queue;
  const watchedBtn = e.target.dataset.watched;
  const deleteBtn = e.target.dataset.delete;
  const preferMovie = refs.currentMoviesList.find(({ id }) => targetID == id);
  const uniqueMovieCheck = refs.fullLibrary.find(({ id }) => targetID == id);

  const { user } = getUser();
  if (queueBtn && !uniqueMovieCheck) {
    const { error, addDoc } = useCollection('queue');
    if (!user) {
      showStackBarTop('error');
    }

    const res = await addDoc({
      ...preferMovie,
      userId: user.uid,
      collection: 'queue',
      createdAt: timestamp(),
    })
      .then(data => {
        console.log('successfuly added to queue list✔', data);
        showStackBarTop('success');
        getFullLibrary(false);

        if (target.dataset.modalqueue) {
          target.classList.add('active-modal-btn');
          target.setAttribute('disabled', '');
        }
      })
      .catch(err => {
        console.log('smthing was wrong', err.message);
        showStackBarTop('error');
      });
  } else if (watchedBtn && !uniqueMovieCheck) {
    if (!user) {
      showStackBarTop('error');
    }
    const { error, addDoc } = useCollection('watched');
    const res = await addDoc({
      ...preferMovie,
      userId: user.uid,
      collection: 'watched',
      createdAt: timestamp(),
    })
      .then(data => {
        console.log('successfuly added to watched list✔', data);
        showStackBarTop('success');
        getFullLibrary(false);
        if (target.dataset.modalwatched) {
          target.classList.add('active-modal-btn');
          target.setAttribute('disabled', '');
        }
      })
      .catch(err => {
        console.log('smthing was wrong', err.message);
        showStackBarTop('error');
      });
  } else if ((uniqueMovieCheck && queueBtn) || watchedBtn) {
    showStackBarTop('info');
  } else if (deleteBtn) {
    const { deleteDoc: deleteDocWatched } = useDocument(
      'watched',
      uniqueMovieCheck.idDoc,
    );
    const { deleteDoc: deleteDocQueue } = useDocument(
      'queue',
      uniqueMovieCheck.idDoc,
    );

    if (uniqueMovieCheck.collection == 'watched') {
      const res = await deleteDocWatched();
      await getFullLibrary(false);
      console.log(refs.fullLibrary);
      let updatedWatched = refs.fullLibrary.filter(
        ({ collection }) => collection === 'watched',
      );

      listOfAddedMovies(updatedWatched);
      updatedWatched = [];
    } else {
      const res = await deleteDocQueue();
      await getFullLibrary(false);
      let updatedQueue = refs.fullLibrary.filter(
        ({ collection }) => collection === 'queue',
      );
      listOfAddedMovies(updatedQueue);
      updatedQueue = [];
    }
    getFullLibrary(false);
  }

  // console.log(preferMovie);

  // getLibrary();
};

// trendList.addEventListener('click', handleFilmID);
// modalDescription.addEventListener('click', handleFilmID);
trendList.addEventListener('click', _throttle(handleFilmID, 1000));

export default handleFilmID;
