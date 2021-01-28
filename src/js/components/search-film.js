import apiService from './components/apiService';

const refs = {
    form: document.querySelector('.search-input'),
    
}

apiService.fetchMovies().then(({results}) =>
  results.forEach(({ title, name }) => {
    if (title) {
      console.log(title);
    } else {
      console.log(name);
    }
  }),
);
