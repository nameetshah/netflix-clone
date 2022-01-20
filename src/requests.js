const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '00ab2a1e0d9c85f9ac6a8fd4c8636381';

const requests = {
    fetchTrending: `${API_URL}trending/all/day?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `${API_URL}discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `${API_URL}movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `${API_URL}discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `${API_URL}discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `${API_URL}discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `${API_URL}discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `${API_URL}discover/movie?api_key=${API_KEY}&with_genres=99`,
}

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original/';
const SEARCH_BASE_URL = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=`;
const POPULAR_BASE_URL = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US`;
const REQUEST_TOKEN_URL = `${API_URL}authentication/token/new?api_key=${API_KEY}`;
const LOGIN_URL = `${API_URL}authentication/token/validate_with_login?api_key=${API_KEY}`;
const SESSION_ID_URL = `${API_URL}authentication/session/new?api_key=${API_KEY}`;

export {
    requests,
    IMAGE_BASE_URL,
    SEARCH_BASE_URL,
    POPULAR_BASE_URL,
    REQUEST_TOKEN_URL,
    LOGIN_URL,
    SESSION_ID_URL,
    API_KEY,
    API_URL
};