import useLogout from '../composables/useLogout';

const { error, logout, isPending } = useLogout();

const logoutBtn = document.querySelector('#logout');

logoutBtn.addEventListener('click', handleLogout);

async function handleLogout(e) {
  e.preventDefault();

  await logout();

  console.log('user logged out');

  //   if (!error.value) {
  //     console.log('user logged out');
  //   }
}
