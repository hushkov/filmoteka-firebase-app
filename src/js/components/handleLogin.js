import useLogin from '../composables/useLogin';
import modalRefs from './modalRefs';

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
  modalRefs.bodyClass.remove('show-modal-film');
  modalRefs.bodyClass.remove('show-modal-signup');
  modalRefs.bodyClass.remove('show-modal-footer');

  // modalRefs.closeModal.classList.add('hidden');
}
