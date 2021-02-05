import useSignup from '../composables/useSignup';
import modalRefs from './modalRefs';

const { error, signup, isPending } = useSignup();

const signupForm = document.querySelector('#signup-form');
const signupBtn = document.querySelector('#signup-btn');

// signupForm.addEventListener('submit', handleSignup);

async function handleSignup(e) {
  e.preventDefault();
  const form = e.currentTarget;
  const errorMessage = document.querySelector('.error-signup');

  // get user info
  const email = form['signup-email'].value;
  const password = form['signup-password'].value;
  const displayName = form['signup-displayName'].value;

  const res = await signup(email, password, displayName);
  form.reset();
  // console.dir(res);
  //
  res.user ? handleCloseModal() : console.log(res);
  if (!res.user) {
    errorMessage.textContent = res;
  }
}

export default handleSignup;

function handleCloseModal() {
  modalRefs.bodyClass.remove('show-modal-film');
  modalRefs.bodyClass.remove('show-modal-signup');
  modalRefs.bodyClass.remove('show-modal-footer');

  // modalRefs.closeModal.classList.add('hidden');
}
