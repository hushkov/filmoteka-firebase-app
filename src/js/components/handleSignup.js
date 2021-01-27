const signupForm = document.querySelector('#signupForm-js');
const displayName = document.querySelector('#displayName-js');
const password = document.querySelector('#password-js');
const email = document.querySelector('#email-js');
const signupBtn = document.querySelector('#signupBtn-js');

signupForm.addEventListener('submit', handleSignup);

async function handleSignup(e) {
  e.preventDefault();

  const displayName = displayName.value;
  const email = email.value;
  const password = password.value;
}
