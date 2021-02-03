import { listOfAddedMovies, displayStartPage } from '../composables/mainCards';

const refs = {
  homeBtn: document.querySelector('.link-home'),
  myLibraryBtn: document.querySelector('.link-library'),
  mainSection: document.querySelector('.js-ul-film'),
};

let libArray = [];

const getLibrary = data => {
  if (data.length) {
    libArray = data.map(doc => doc.data());
  }

  console.log('lib: ', libArray);
};

export default getLibrary;

refs.myLibraryBtn.addEventListener('click', event => {
  if (libArray.length) {
    listOfAddedMovies(libArray);
  } else {
    listOfAddedMovies(libArray);
    refs.mainSection.innerHTML =
      '<h3 style="margin:0 auto;">You still don`t have any favorites!</h3>';
  }
});

refs.homeBtn.addEventListener('click', event => {
  displayStartPage();
});
