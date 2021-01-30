import apiService from './apiService';

const refs = {
    form: document.querySelector('.search-form')
    
}
console.dir(refs.form)

refs.form.addEventListener('submit', newFilms)

const newFilms = event => {
  event.preventDefault()
  console.log("event: ", event); 

  console.log("event type: ", event.type); 
  console.log("this: ", this); 
  console.log("target: ", event.target);
};

// apiService.fetchMovies().then(({results}) =>
//   results.forEach(({ title, name }) => {
//     if (title) {
//       console.log(title);
//     } else {
//       console.log(name);
//     }
//   }),
// );
