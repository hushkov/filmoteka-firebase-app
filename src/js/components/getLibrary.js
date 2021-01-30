import refs from '../components/refs';
import getCollection from '../composables/getCollection';
import getUser from '../composables/getUser';

import getData from '../composables/getCollection';

const getLibrary = data => {
  const { user } = getUser();
  //   const { documents } = getData('queue', ['userId', '==', user.uid]);
  //   console.log(documents);
  //   console.log(res);

  data.forEach(doc => {
    const guide = doc.data();
    console.log(guide);
  });
};

export default getLibrary;
