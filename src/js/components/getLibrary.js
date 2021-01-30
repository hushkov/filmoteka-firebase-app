import refs from '../components/refs';
import getCollection from '../composables/getCollection';
import getUser from '../composables/getUser';

const getLibrary = () => {
  const { user } = getUser();
  const { documents, error } = getCollection('queue');

  console.log(documents);
  console.log(error);
};

export default getLibrary;

const { documents, error } = getCollection('queue');

console.log(documents);
console.log(error);
