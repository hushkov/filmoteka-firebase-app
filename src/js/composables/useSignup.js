import { projectAuth } from '../../firebase/config';

const error = null;

const signup = async (email, password, displayName) => {
  // error = null;

  try {
    const res = await projectAuth.createUserWithEmailAndPassword(email, password);
    if (!res) {
      throw new Error('Could not complete the signup');
    }

    await res.user.updateProfile({ displayName });

    // error = null;

    return res;
  } catch (err) {
    console.log(err.message);
    // error = 'Incorrect login credantials';
  }
};

const useSignup = () => {
  return { error, signup };
};

export default useSignup;
