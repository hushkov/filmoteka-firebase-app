import { projectAuth } from '../../firebase/config';

let error = null;

const signup = async (email, password, displayName) => {
  error = null;

  try {
    const res = await projectAuth.createUserWithEmailAndPassword(email, password);
    if (!res) {
      throw new Error('Could not complete the signup');
    }

    await res.user.updateProfile({ displayName });

    error = null;

    return res;
  } catch (err) {
    // error = 'Incorrect login credantials';
    error = err.message;
    // console.log(error);
    return error;
  }
};

const useSignup = () => {
  return { error, signup };
};

export default useSignup;
