import './main.scss';
import './js/components/refs';
import './js/components/modalHandler';
import './js/components/header';
import './js/components/scrollToTopBtn.js';
import './js/components/apiService';
import './js/components/handleSignup';
import './js/components/handleLogin';
import './js/components/handleLogout';
import './js/composables/useLogin';
import './js/composables/useSignup';
import './js/composables/useLogout';
import './js/composables/getUser';

import { displayStartPage } from './js/composables/mainCards.js';

displayStartPage();
