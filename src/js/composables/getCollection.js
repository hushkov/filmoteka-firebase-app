import { projectFirestore } from '../../firebase/config';
import getLibrary from '../components/getLibrary';

import refs from '../components/refs';

const getCollection = (collection, query) => {
  let documents = null;
  let error = null;

  // register the firestore collection reference
  let collectionRef = projectFirestore
    .collection(collection)
    .orderBy('createdAt');

  if (query) {
    collectionRef = collectionRef.where(...query);
  }

  const unsub = collectionRef.onSnapshot(
    snap => {
      let results = [];

      snap.docs.forEach(doc => {
        // must wait for the server to create the timestamp & send it back

        doc.data().createdAt && results.push({ ...doc.data(), idFire: doc.id });
      });

      // update values
      documents = results;

      console.log('inside fn:', documents);
      error = null;
    },
    err => {
      console.log(err.messages);
      documents = null;
      error = 'could not fetch the data';
    },
  );

  //   watchEffect(onInvalidate => {
  //     onInvalidate(() => unsub());
  //   });

  //   return { error, documents };
  console.log('near return:', documents);
  return { documents };
};

export default getCollection;
