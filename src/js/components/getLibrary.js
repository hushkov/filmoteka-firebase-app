import refs from '../components/refs';
import getCollection from '../composables/getCollection';
import getUser from '../composables/getUser';

const movieList = document.querySelector('.getLib');
let libArray = [];

const getLibrary = data => {
  // console.log(data);

  if (data.length) {
    libArray = data.map(doc => doc.data());
  }

  // console.log(libArray);

  if (data.length) {
    let html = '';
    data.forEach(doc => {
      const movie = doc.data();
      const li = `
        <li>
          <h3 class="collapsible-header grey lighten-4"> ${movie.title} </h3>
          <p class="collapsible-body white"> ${movie.overview} </p>
          
        </li>
      `;
      html += li;
      refs.queueFire.push(movie);
      console.log('queueFireBase:', refs.queueFire);
    });
    movieList.innerHTML = html;
  } else {
    movieList.innerHTML =
      '<h5 class="center-align">Login to view yout favorites</h5>';
  }
};

// console.log('OUTERqueueFireBase:', refs.queueFire);
export default getLibrary;
