import useLogin from '../composables/useLogin';

const { error, login, isPending } = useLogin();

const loginForm = document.querySelector('#login-form');
const errorMessage = document.querySelector('.error-login');
const loginBtn = document.querySelector('#login-btn');

loginForm.addEventListener('input', handleLogin);

async function handleLogin(e) {
  e.preventDefault();
  const form = e.currentTarget;

  // get user info
  const email = loginForm['login-email'].value;
  const password = loginForm['login-password'].value;

  const res = await login(email, password);
  form.reset();
  console.dir(res);
  console.log('good');
  //
  // res.user ? console.log('user signed up') : console.log(res);
  if (!res.user) {
    errorMessage.textContent = res;
  }
}
