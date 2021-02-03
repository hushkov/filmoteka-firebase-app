import useLogin from '../composables/useLogin';
import onCloseModal from './modalHandler';

import rfs from './modalRefs.js';

const { error, login, isPending } = useLogin();

const loginForm = document.querySelector('#login-form');
const loginBtn = document.querySelector('#login-btn');

// loginForm.addEventListener('submit', handleLogin);

async function handleLogin(e) {
  e.preventDefault();
  const form = e.currentTarget;
  const errorMessage = document.querySelector('.error-login');

  // get user info
  let email = form['login-email'].value;
  const password = form['login-password'].value;

  const res = await login(email, password);
  form.reset();

  res.user ? handleCloseModal() : console.log(res);

  if (!res.user) {
    errorMessage.textContent = res;
  }
}

export default handleLogin;

function handleCloseModal() {
  rfs.bodyClass.remove('show-modal-film');
  rfs.bodyClass.remove('show-modal-signup');
  rfs.bodyClass.remove('show-modal-footer');

  rfs.closeModal.classList.add('hidden');
}
