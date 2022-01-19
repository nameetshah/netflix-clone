const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '00ab2a1e0d9c85f9ac6a8fd4c8636381';

const requests = {
    fetchTrending: `${API_URL}trending/all/day?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `${API_URL}discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `${API_URL}movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `${API_URL}discover/movie?api_key=${API_KEY}&with_genre=28`,
    fetchComedyMovies: `${API_URL}discover/movie?api_key=${API_KEY}&with_genre=35`,
    fetchHorrorMovies: `${API_URL}discover/movie?api_key=${API_KEY}&with_genre=27`,
    fetchRomanceMovies: `${API_URL}discover/movie?api_key=${API_KEY}&with_genre=10749`,
    fetchDocumentaries: `${API_URL}discover/movie?api_key=${API_KEY}&with_genre=99`,
}

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original/';

export {
    requests,
    IMAGE_BASE_URL
};