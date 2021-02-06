import axios from 'axios';
import refs from './refs';

export default {
  _page: 1,
  searchQuery: '',
  keyApi: '5c34acfe39a6372a620da68979c929b1',
  baseURL: '',
  _error: null,
  id: '',

  async fetchMovies() {
    this.searchQuery
      ? (this.baseURL = `https://api.themoviedb.org/3/search/movie?api_key=${this.keyApi}&language=en-US&query=${this.searchQuery}&page=${this.page}&include_adult=false`)
      : (this.baseURL = `https://api.themoviedb.org/3/trending/all/day?api_key=${this.keyApi}&page=${this.page}`);

    try {
      let res = await axios.get(this.baseURL);
      res = await res.data;

      return res;
    } catch (err) {
      console.log(err.message);
      this._error = 'could not fetch data';

      return this._error;
    }
  },

  async fetchSimilarMovies(movieId) {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${this.keyApi}&language=en-US&page=1`;

    try {
      let res = await axios.get(url);
      return res.data;
    } catch (err) {
      this._error = 'could not fetch similar movies';
      console.clear();
    }
  },

  get showError() {
    return this._error;
  },

  resetPage() {
    this._page = 1;
  },

  incrementPage() {
    this._page += 1;
  },

  get page() {
    return this._page;
  },

  set page(value) {
    this._page = value;
  },

  get query() {
    return this.searchQuery;
  },

  set query(value) {
    this.searchQuery = value;
  },

  // функция поиска фильма по id
  async findMovie() {
    this.error = null;

    try {
      let res = await axios.get(
        `https://api.themoviedb.org/3/movie/${this.id}?api_key=${this.keyApi}`,
      );
      res = await res.data;
      // res = await res.data.results;
      this.error = null;

      return res;
    } catch (err) {
      console.log(err.message);
      this.error = 'could not find movie';
    }
  },

  get filmId() {
    return this._id;
  },

  set filmId(value) {
    this._id = value;
  },

  async getMoviesData() {
    let array = [];
    const filmArr = [];
    let totalPages = null;
    let totalResults = null;

    await this.fetchMovies()
      .then(data => {
        const mainError = document.querySelector('#mainError');
        if (!data.results.length) {
          mainError.style.opacity = '1';
        } else {
          mainError.style.opacity = '0';
        }

        totalPages = data.total_pages;
        totalResults = data.total_results;
        array = [...data.results];
        let str = '';
        array.forEach(e => {
          const obj = {};

          obj.id = e.id;
          obj.popularity = e.popularity;
          obj.poster_path = e.poster_path;

          obj.title = !e.title ? e.name : e.title;

          // добавил original title и name
          obj.original_title = !e.original_title
            ? e.original_name
            : e.original_title;

          if (e.release_date || e.first_air_date) {
            obj.release_date = !e.release_date
              ? e.first_air_date.substr(0, 4)
              : e.release_date.substr(0, 4);
          }

          str = '';
          let genreArray = [];
          [...e.genre_ids].forEach(number => {
            refs.genres.forEach(ref => {
              if (number === ref.id) {
                genreArray.push(ref.name);
              }
            });
          });
          str = genreArray.join(', ');
          obj.genre_ids = str;
          obj.overview = e.overview;
          obj.vote_average = e.vote_average;
          obj.vote_count = e.vote_count;

          filmArr.push(obj);
        });
        if (totalPages) {
          filmArr.push({ totalPages, totalResults });
        }

        // refs.currentMoviesList = [...filmArr];
      })
      .catch(err => {
        // console.log(err);
        console.clear();
        this._error = 'cillsdfjlsdjfl';

        return this._error;
      });

    return filmArr;
  },
};
