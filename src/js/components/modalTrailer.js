const apiYoutube = {
    // apiKey: '5c34acfe39a6372a620da68979c929b1',

    getMovieTrailer(id, updateTrailerMarkup, trailerModal) {
        fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=5c34acfe39a6372a620da68979c929b1`,
        )
        .then(response => response.json())
        .then(({ results }) => {
            const isSuccess = !Array.isArray(results) || results.length === 0;

            if (isSuccess) {
                console.log('Trailer not found');
            } else {
                const { key } = results[0];
                const url = `https://www.youtube.com/embed/${key}`

                updateTrailerMarkup(url, trailerModal)
            };
        });
    },
};

export default apiYoutube.getMovieTrailer;