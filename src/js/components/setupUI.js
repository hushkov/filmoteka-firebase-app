const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');
const accountDetails = document.querySelectorAll('.account-details');

const setupUI = user => {
  if (user) {
    // acc info

    const html = `
    <h3> Logged in as ${user.email}</h3>
        `;
    accountDetails.innerHTML = html;
    // toggle user UI elements
    loggedInLinks.forEach(item => (item.style.display = 'block'));
    loggedOutLinks.forEach(item => (item.style.display = 'none'));
  } else {
    // hide acc info
    accountDetails.innerHTML = '';
    // toggle user elements
    loggedInLinks.forEach(item => (item.style.display = 'none'));
    loggedOutLinks.forEach(item => (item.style.display = 'block'));
  }
};

export default setupUI;
