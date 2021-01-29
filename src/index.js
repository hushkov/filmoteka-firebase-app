import './main.scss';
import './js/components/refs';
import './js/components/apiService';
import './js/components/header';
import './js/components/scrollToTopBtn.js';
import './js/components/handleSignup';
import './js/composables/mainCards';
import './js/components/modal.js';

import apiService from './js/components/apiService';

apiService.fetchMovies().then(data => console.log(data));
