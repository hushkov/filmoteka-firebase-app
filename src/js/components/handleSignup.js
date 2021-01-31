import useSignup from '../composables/useSignup';

const { error, signup, isPending } = useSignup();

const signupForm = document.querySelector('#signup-form');

const errorMessage = document.querySelector('.error-signup');
const signupBtn = document.querySelector('#signup-btn');

// signupForm.addEventListener('submit', handleSignup);

async function handleSignup(e) {
  e.preventDefault();
  const form = e.currentTarget;

  // get user info
  const email = signupForm['signup-email'].value;
  const password = signupForm['signup-password'].value;
  const displayName = signupForm['signup-displayName'].value;

  console.log(email, password, displayName);

  const res = await signup(email, password, displayName);
  form.reset();
  // console.dir(res);
  //
  // res.user ? console.log('user signed up') : console.log(res);
  if (!res.user) {
    errorMessage.textContent = res;
  }
}
