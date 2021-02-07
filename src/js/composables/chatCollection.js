import { projectFirestore } from '../../firebase/config';

// declare the connection & refs inside the function
// because the collection state is not global (like a user)
// different collections may be used at once this way

const chatCollection = collection => {
  let error = null;

  const addDoc = async doc => {
    error = null;
    try {
      await projectFirestore.collection(collection).add(doc);
    } catch (err) {
      console.log(err.message);
      error = 'coluld not send message';
    }
  };

  return { error, addDoc };
};

export default chatCollection;
