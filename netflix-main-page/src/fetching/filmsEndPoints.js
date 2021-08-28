const API_KEY = '0b186626d1a1225f8fd4325e8341121b';

const endPoints = {
    netflixOriginals: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`,
    trending:`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`,
    topRated:`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    actionMovies:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`,
    comedyMovies:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`,
    horrorMovies:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`,
    romanceMovies:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    documentaries:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=99`,
    search: `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=`
}

export {  endPoints };