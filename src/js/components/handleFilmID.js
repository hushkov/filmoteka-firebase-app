import refs from '../components/refs';
import useCollection from '../composables/useCollection';
import { timestamp } from '../../firebase/config';
import getLibrary from './getLibrary';

const { error, addDoc } = useCollection('queue');

const trendList = document.querySelector('.js-ul-film');

const handleFilmID = async e => {
  e.preventDefault();

  const targetID = e.target.dataset.id;
  console.log(targetID);
  //   console.log(targetID);

  const preferMovie = refs.currentMoviesList.find(({ id }) => targetID == id);
  console.log(preferMovie);

  // const res = await addDoc({ ...preferMovie, createdAt: timestamp() });

  // getLibrary();
};

trendList.addEventListener('click', handleFilmID);
