import useSignup from '../composables/useSignup';

const { error, signup, isPending } = useSignup();

const signupForm = document.querySelector('#signupForm-js');
const displayName = document.querySelector('#signupForm-js.displayName-js');
const password = document.querySelector('#signupForm-js.password-js');
const email = document.querySelector('#signupForm-js.email-js');
const errorMessage = document.querySelector('.error-signup');
const signupBtn = document.querySelector('#signupBtn-js');

// signupForm.addEventListener('submit', handleSignup);

async function handleSignup(e) {
  e.preventDefault();
  const form = e.currentTarget;
  const email = form.elements.email.value;
  const password = form.elements.password.value;
  const displayName = form.elements.displayName.value;

  const res = await signup(email, password, displayName);
  form.reset();
  // console.dir(res);
  //
  // res.user ? console.log('user signed up') : console.log(res);
  if (!res.user) {
    errorMessage.textContent = res;
  }
}
