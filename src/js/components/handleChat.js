const chatBtn = document.querySelector('#chat');
const chatIcon = document.querySelector('#chat-icon');

chatBtn.addEventListener('click', handleChat);

const mainFilmSection = document.querySelector('.js-section-film');
const vueChat = document.querySelector('#vue-app');
const mainBtnHome = document.querySelector('.remove-active-home');
const mainBtnLib = document.querySelector('.remove-active-lib');

function handleChat(e) {
  e.preventDefault();

  mainFilmSection.classList.add('hidden');
  vueChat.classList.remove('hidden');
  mainBtnHome.classList.remove('current');
  mainBtnLib.classList.remove('current');
  chatIcon.classList.add('active-chat');
}
