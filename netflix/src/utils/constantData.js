export const API_END_POINT = "http://localhost:6969/api/v1/user"

export const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOTU2NjFlNDM0YzRkZWU3OGMyMGM2ZWQ2ZjhiZWE0NSIsIm5iZiI6MTcyNDI0MDg2OC43MjUzNDcsInN1YiI6IjY2YTY3ZmM2ZjQyNTliNTMxNzYwMzQ1NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XPdqjvlvrRsTPn2QlNTyYRyWeikr7_w9obRtVIZK5uo'
  }
};

  export const Now_Playing_Movie = "https://api.themoviedb.org/3/movie/now_playing"

  export const Popular_Movies = "https://api.themoviedb.org/3/movie/popular"

  export const Top_Rated_Movies = "https://api.themoviedb.org/3/movie/top_rated"

  export const Upcomming_Movies = "https://api.themoviedb.org/3/movie/upcoming"

  export const TMDB_IMG_PATH= "https://image.tmdb.org/t/p/w500/"

  export const SEARCH_MOVIE_URL = "https://api.themoviedb.org/3/search/movie?query="
  