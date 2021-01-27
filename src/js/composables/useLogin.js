import { projectAuth } from '@/firebase/config.js';

const error = null;

const login = async (email, password) => {
  error = null;

  try {
    const res = await projectAuth.signInWithEmailAndPassword(email, password);
    error = null;
    // console.log(res);

    return res;
  } catch (err) {
    error = err.message;
  }
};

const useLogin = () => {
  return { error, login };
};

export default useLogin;
