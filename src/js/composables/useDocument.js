import { projectFirestore } from '../../firebase/config';

const useDocument = (collection, id) => {
  let error = null;
  let isPending = false;
  let docRef = projectFirestore.collection(collection).doc(id);

  const deleteDoc = async () => {
    isPending = true;
    error = null;

    try {
      const res = await docRef.delete();
      isPending = false;
      return res;
    } catch (err) {
      console.log(err.message);
      isPending = false;
      error = 'could not delete the document';
    }
  };

  const updateDoc = async updates => {
    isPending = true;
    error = null;

    try {
      const res = await docRef.update(updates);
      isPending = false;
      return res;
    } catch (err) {
      console.log(err.message);
      isPending = false;
      error = 'could not update the document';
    }
  };

  return { error, isPending, deleteDoc, updateDoc };
};

export default useDocument;
