function spinnerOn() {
  document.querySelector('#spinner-loader').style.display = 'block';
  document.querySelector('main').style.opacity = 0;
}
function spinnerOff() {
  document.querySelector('#spinner-loader').style.display = 'none';
  document.querySelector('main').style.opacity = 1;
}

export { spinnerOn, spinnerOff };
