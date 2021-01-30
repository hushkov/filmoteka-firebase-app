import useLogin from '../composables/useLogin';
import refs from './refs';

const { error, login, isPending } = useLogin();

const loginForm = document.querySelector('#login-form');
const errorMessage = document.querySelector('.error-login');
const loginBtn = document.querySelector('#login-btn');

loginForm.addEventListener('submit', handleLogin);

async function handleLogin(e) {
  e.preventDefault();
  const form = e.currentTarget;

  // get user info
  const email = loginForm['login-email'].value;
  const password = loginForm['login-password'].value;

  const res = await login(email, password);
  form.reset();
  // console.dir(res);
  console.log(refs.currentDataList);

  //
  // res.user ? console.log('user signed up') : console.log(res);
  if (!res.user) {
    errorMessage.textContent = res;
  }
}
