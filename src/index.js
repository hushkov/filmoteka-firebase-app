import './main.scss';
import './js/components/refs';
import './js/components/modalHandler';
import './js/components/header';
import './js/components/scrollToTopBtn.js';
import './js/components/my-lib';
import './js/composables/mainCards';
import './js/components/apiService';
// import './js/composables/footerModal';

import './js/components/spinnerOnOff'
//===========================
// import './js/components/handleSignup';
// import './js/components/handleLogin';
// import './js/components/handleLogout';
// import './js/components/handleFilmID';
// import './js/composables/getUser';
// import './js/components/getLibrary';
//============================
import './js/composables/useLogin';
import './js/composables/useSignup';
import './js/composables/useLogout';

//============================
import { displayStartPage } from './js/composables/mainCards.js';
displayStartPage();

import apiService from './js/components/apiService';

// apiService.query = 'wonder';

// const show = apiService.getMoviesData();
// console.log(show);
