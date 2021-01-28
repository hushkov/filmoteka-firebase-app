import useLogin from '../composables/useLogin';

const { error, login, isPending } = useLogin();

const signupForm = document.querySelector('#loginForm-js');
const displayName = document.querySelector('#loginForm-js.displayName-js');
const password = document.querySelector('#loginForm-js.password-js');
const email = document.querySelector('#loginForm-js.email-js');
const errorMessage = document.querySelector('.error-signup');
const signupBtn = document.querySelector('#loginBtn-js');

// signupForm.addEventListener('submit', handleLogin);

async function handleLogin(e) {
  e.preventDefault();
  const form = e.currentTarget;
  const email = form.elements.email.value;
  const password = form.elements.password.value;
  const displayName = form.elements.displayName.value;

  const res = await login(email, password, displayName);
  form.reset();
  // console.dir(res);
  //
  // res.user ? console.log('user signed up') : console.log(res);
  if (!res.user) {
    errorMessage.textContent = res;
  }
}
