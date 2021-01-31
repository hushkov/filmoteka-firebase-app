import { projectFirestore } from '../../firebase/config';

const useCollection = collection => {
  let error = null;
  //   const isPending = false;

  // add a new doncument
  const addDoc = async doc => {
    error = null;
    // isPending = true;

    try {
      const res = await projectFirestore.collection(collection).add(doc);
      //   isPending = false;
      return res;
    } catch (err) {
      console.log(err.message);
      error = 'could not send the message';
      //   isPending = false;
      return error;
    }
  };

  return { error, addDoc };
};

export default useCollection;
