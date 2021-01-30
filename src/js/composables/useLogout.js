import { projectAuth } from '../../firebase/config';

//refs
let error = null;
let isPending = false;

// logout function
const logout = async () => {
  error = null;
  isPending = true;

  try {
    await projectAuth.signOut();
    isPending = false;
  } catch (err) {
    console.log(err.message);
    error = err.message;
    isPending = false;
  }
};

const useLogout = () => {
  return { error, logout, isPending };
};

export default useLogout;
