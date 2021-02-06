// Популярные фильмы
// https://api.themoviedb.org/3/movie/popular?api_key=5c34acfe39a6372a620da68979c929b1&page=1
// Запрос на поиск фильмов
// https://api.themoviedb.org/3/search/movie?api_key=5c34acfe39a6372a620da68979c929b1&query=zapros&page=1&include_adult=false

export default {
  apiKey: '5c34acfe39a6372a620da68979c929b1',
  defaultSearch: 'https://api.themoviedb.org/3/search/movie',
  isPending: false,
  currentMoviesList: [],
  queueFire: [],
  showError: null,
  fullLibrary: [],

  genres: [
    {
      id: 28,
      name: 'Action',
    },
    {
      id: 12,
      name: 'Adventure',
    },

    {
      id: 35,
      name: 'Comedy',
    },

    {
      id: 14,
      name: 'Fantasy',
    },
    {
      id: 36,
      name: 'History',
    },
    {
      id: 27,
      name: 'Horror',
    },
    {
      id: 10402,
      name: 'Music',
    },

    {
      id: 10749,
      name: 'Romance',
    },
    {
      id: 878,
      name: 'Science Fiction',
    },
    {
      id: 10770,
      name: 'TV Movie',
    },
    {
      id: 53,
      name: 'Thriller',
    },
    {
      id: 10752,
      name: 'War',
    },

    {
      id: 10759,
      name: 'Action & Adventure',
    },
    {
      id: 16,
      name: 'Animation',
    },

    {
      id: 80,
      name: 'Crime',
    },
    {
      id: 99,
      name: 'Documentary',
    },
    {
      id: 18,
      name: 'Drama',
    },
    {
      id: 10751,
      name: 'Family',
    },
    {
      id: 10762,
      name: 'Kids',
    },
    {
      id: 9648,
      name: 'Mystery',
    },
    {
      id: 10763,
      name: 'News',
    },
    {
      id: 10764,
      name: 'Reality',
    },
    {
      id: 10765,
      name: 'Sci-Fi & Fantasy',
    },
    {
      id: 10766,
      name: 'Soap',
    },
    {
      id: 10767,
      name: 'Talk',
    },
    {
      id: 10768,
      name: 'War & Politics',
    },
    {
      id: 37,
      name: 'Western',
    },
  ],
};
