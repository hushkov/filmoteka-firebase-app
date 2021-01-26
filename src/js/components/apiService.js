import axios from 'axios';

export default {
  page: 1,
  searchQuery: '',
  keyApi: '5c34acfe39a6372a620da68979c929b1',

  fetchMovies() {
    if (this.searchQuery) {
      const baseURL = `https://api.themoviedb.org/3/search/movie?api_key=${this.keyApi}&language=en-US&query=${this.searchQuery}&page=${this.page}&include_adult=false`;
      return axios.get(baseURL).then(({ data }) => data.results);
    }

    const baseURL = `https://api.themoviedb.org/3/trending/all/day?api_key=${this.keyApi}&page=${this.page}`;
    return axios.get(baseURL).then(({ data }) => data.results);
  },

  resetPage() {
    this.page = 1;
  },

  incrementPage() {
    this.page += 1;
  },

  get query() {
    return this.searchQuery;
  },

  set query(value) {
    this.searchQuery = value;
  },
};
