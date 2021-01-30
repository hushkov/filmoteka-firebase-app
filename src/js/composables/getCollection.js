import { projectFirestore } from '../../firebase/config';
import getLibrary from '../components/getLibrary';
import refs from '../components/refs';

const getCollection = (collection, query) => {
  let documents = null;
  let error = null;

  // register the firestore collection reference
  let collectionRef = projectFirestore.collection(collection).orderBy('createdAt');

  if (query) {
    collectionRef = collectionRef.where(...query);
  }

  const unsub = collectionRef.onSnapshot(
    snap => {
      let results = [];
      snap.docs.forEach(doc => {
        // must wait for the server to create the timestamp & send it back

        doc.data().createdAt && results.push({ ...doc.data(), id: doc.id });
      });

      // update values
      documents = results;
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

  return { error, documents };
};

// export default getCollection;

const getData = () => {
  projectFirestore
    .collection('guides')
    .get()
    .then(snapshot => {
      getLibrary(snapshot.docs);
    });
  //   return snapshot.docs.map(doc => doc.data());
  //   refs.libraryQueue = [...myLib];
  //   console.log(refs.libraryQueue);
};

export default getData;
