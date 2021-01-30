import useSignup from '../composables/useSignup';

const { error, signup, isPending } = useSignup();

// const signupForm = document.querySelector('#signupForm-js');
const displayName = document.querySelector('#displayName-js');
const password = document.querySelector('#password-js');
const email = document.querySelector('#email-js');
const signupBtn = document.querySelector('#signupBtn-js');

// signupForm.addEventListener('submit', handleSignup);

async function handleSignup(e) {
  e.preventDefault();
  const form = e.currentTarget;
  const email = form.elements.email.value;
  const password = form.elements.password.value;
  const displayName = form.elements.displayName.value;

  //   signupBtn.classList.add(disables);

  const res = await signup(email, password, displayName);
  form.reset();
  console.log('user signed up');
  //   if (error) {
  //     console.log(error.message);
  //   }
}
