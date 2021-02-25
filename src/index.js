import './main.scss';
import './js/components/refs';
import './js/components/modalHandler';
import './js/components/header';
import './js/components/scrollToTopBtn.js';
import './js/components/my-lib';
import './js/composables/mainCards';
import './js/components/apiService';
import './js/components/youtubeApi';
import './js/components/trailer-notification';
import './js/components/singleFilmMarkup';
// import './js/components/spinnerOnOff';
import './js/components/changeTheme';
import posterImg from '././images/poster-not-avalible.jpg';
import './js/components/search- film';

import { displayStartPage } from './js/composables/mainCards.js';
displayStartPage();

//=====================================
// import './js/components/handleSignup';
// import './js/components/handleLogin';
import './js/components/handleLogout';
import './js/components/handleFilmID';
import './js/components/handleChat';
import './js/composables/getUser';
import './js/components/getLibrary';
import './js/components/setupUI';

//=====================================
import './js/composables/useLogin';
import './js/composables/useSignup';
import './js/composables/useLogout';
import './js/composables/useCollection';
// import './js/composables/route';
//=====================================

//=====================================
// import './js/route.js';
// import './js/router.js';
// import './js/app.js';
//=====================================

import { projectFirestore } from './firebase/config';
import { projectAuth } from './firebase/config';
import chatCollection from './js/composables/chatCollection';
import getChatCollection from './js/composables/getChatCollection';
import chatUser from './js/composables/chatUser';
import { timestamp } from './firebase/config';
import { formatDistanceToNow } from 'date-fns';

var app = new Vue({
  el: '#app',
  data: {
    queue: [],
    error: null,
    documents: [],
    message: '',
    formattedDocuments: [],
    handleSubmit: null,
    displayName: null,
    email: null,
    getMessages: [],
    scrollRef: null,
  },

  mounted() {
    const { addDoc, error } = chatCollection('messages');
    let nick = null;

    projectAuth.onAuthStateChanged(_user => {
      console.log('User state change. Current user is: ', _user);
      this.displayName = _user.displayName;
      this.email = _user.email;
      nick = _user.displayName;
    });

    this.handleSubmit = async () => {
      const chat = {
        name: nick,
        message: this.message,
        createdAt: timestamp(),
      };
      await addDoc(chat);
      if (!error) {
        this.message = '';
      }
    };

    const collectionRef = projectFirestore
      .collection('messages')
      .orderBy('createdAt');
    collectionRef.onSnapshot(snapshot => {
      this.getMessages = [];
      snapshot.forEach(doc => {
        // getMessages.push({ ...doc.data(), idFire: doc.id });
        doc.data().createdAt &&
          this.getMessages.push({ ...doc.data(), id: doc.id });
      });

      //   this.formattedDocuments = queue;
    });
  },
  computed: {
    formattedTime: function () {
      return this.getMessages.map(doc => {
        let time = formatDistanceToNow(doc.createdAt.toDate());
        return { ...doc, createdAt: time };
      });
    },
  },
  updated() {
    this.$refs.scrollRef.scrollTop = this.$refs.scrollRef.scrollHeight;
  },
});
