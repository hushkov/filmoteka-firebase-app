import { projectAuth } from '../../firebase/config';

let user = projectAuth.currentUser;

projectAuth.onAuthStateChanged(_user => {
  //   console.log('User state change. Current user is: ', _user);
  user = _user.displayName;
});

const chatUser = () => {
  return { user };
};

export default chatUser;
