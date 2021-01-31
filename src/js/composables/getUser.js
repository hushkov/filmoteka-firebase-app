import { projectAuth } from '../../firebase/config';

// refs
let user = projectAuth.currentUser;

// auth changes

projectAuth.onAuthStateChanged(_user => {
  // console.log('User sate change. Current user is:', _user);
  user = _user;
});

const getUser = () => {
  return { user };
};

export default getUser;
