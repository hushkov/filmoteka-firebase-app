// import { ref, watchEffect } from 'vue';
import { projectFirestore } from '../../firebase/config';

const getChatCollection = collection => {
  let documents = null;
  let error = null;

  let collectionRef = projectFirestore
    .collection(collection)
    .orderBy('createdAt');

  const unsub = collectionRef.onSnapshot(
    snap => {
      let results = [];
      snap.docs.forEach(doc => {
        doc.data().createdAt && results.push({ ...doc.data(), id: doc.id });
      });
      documents = results;
      error = null;
    },
    err => {
      console.log(err.message);
      documents = null;
      error = 'could not fetch data';
    },
  );

  //   watchEffect(onInvalidate => {
  //     // unsub from prev collection when watcher is stopped (component unmounted)
  //     onInvalidate(() => unsub());
  //   });

  return { documents, error };
};

export default getChatCollection;
