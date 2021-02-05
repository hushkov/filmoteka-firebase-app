import refs from '../components/refs';
import useCollection from '../composables/useCollection';
import { timestamp } from '../../firebase/config';
import getUser from '../composables/getUser';
import getLibrary from './getLibrary';

const trendList = document.querySelector('.js-ul-film');
const modalDescription = document.querySelector('.modal-content');

const handleFilmID = async e => {
  e.preventDefault();
  const targetID = e.target.dataset.id;
  const queueBtn = e.target.dataset.queue;
  const watchedBtn = e.target.dataset.watched;
  const preferMovie = refs.currentMoviesList.find(({ id }) => targetID == id);
  const { user } = getUser();
  if (queueBtn) {
    const { error, addDoc } = useCollection('queue');

    const res = await addDoc({
      ...preferMovie,
      userId: user.uid,
      createdAt: timestamp(),
    })
      .then(data => console.log('successfuly added to queue list✔', data))
      .catch(err => console.log('smthing was wrong', err.message));
  } else if (watchedBtn) {
    const { error, addDoc } = useCollection('watched');
    const res = await addDoc({
      ...preferMovie,
      userId: user.uid,
      createdAt: timestamp(),
    })
      .then(data => console.log('successfuly added to watched list✔', data))
      .catch(err => console.log('smthing was wrong', err.message));
  }

  // console.log(preferMovie);

  // getLibrary();
};

trendList.addEventListener('click', handleFilmID);
// modalDescription.addEventListener('click', handleFilmID);

export default handleFilmID;
