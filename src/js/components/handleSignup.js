import useSignup from '../composables/useSignup';
import modalRefs from './modalRefs';
import showStackBarTop from './pnotify';

const { error, signup, isPending } = useSignup();

// signupForm.addEventListener('submit', handleSignup);

async function handleSignup(e) {
  e.preventDefault();
  const form = e.currentTarget;
  const errorMessage = document.querySelector('.error-signup');

  // get user info
  const email = form['signup-email'].value;
  const password = form['signup-password'].value;
  const displayName = form['signup-displayName'].value;

  form['signup-btn'].setAttribute('disabled', '');
  form['signup-btn'].innerHTML = 'Loading...';
  const res = await signup(email, password, displayName);
  form.reset();
  // console.dir(res);
  //
  res.user ? handleCloseModal() : console.log(res);
  if (!res.user) {
    errorMessage.textContent = res;
    form['signup-btn'].removeAttribute('disabled', '');
    form['signup-btn'].innerHTML = 'Sign up';
  }

  showStackBarTop('success-signup');
}

export default handleSignup;

function handleCloseModal() {
  modalRefs.bodyClass.remove('show-modal-film');
  modalRefs.bodyClass.remove('show-modal-signup');
  modalRefs.bodyClass.remove('show-modal-footer');

  // modalRefs.closeModal.classList.add('hidden');
}
