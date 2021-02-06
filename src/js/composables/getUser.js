import { projectAuth } from '../../firebase/config';
import { projectFirestore } from '../../firebase/config';
import setupUI from '../components/setupUI';

// refs
let user = projectAuth.currentUser;

// auth changes

projectAuth.onAuthStateChanged(_user => {
  // console.log('User sate change. Current user is:', _user);
  user = _user;
});

projectAuth.onAuthStateChanged(_user => {
  if (_user) {
    // console.log('user logged in: ', user);

    setupUI(user);

    // projectFirestore
    //   .collection('queue')
    //   .orderBy('createdAt')
    //   .onSnapshot(snapshot => {
    //     getLibrary(snapshot.docs);
    //   });
  } else {
    console.log('user logged out');
    setupUI();
  }
});

const getUser = () => {
  return { user };
};

export default getUser;
