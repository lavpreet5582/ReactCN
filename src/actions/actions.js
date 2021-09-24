export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_FAVOURITE = 'ADD_FAVOURITE';
export const REMOVE_FAVOURITE = 'REMOVE_FAVOURITE';
export const ADD_MOVIE_TO_LIST = 'ADD_MOVIE_TO_LIST';
export const ADD_SEARCH_RESULTS = 'ADD_SEARCH_RESULTS';

export const SET_SHOW_FAVOURITE = 'SET_SHOW_FAVOURITE';


export function addMovies(movies) {
  return {
    type: 'ADD_MOVIES',
    movies
  }
}
export function addFavourites(movie) {
  return {
    type: 'ADD_FAVOURITE',
    movie
  }
}
export function removeFromFavourites(movie) {
  return {
    type: 'REMOVE_FAVOURITE',
    movie
  }
}

export function setShowFavourites(val) {
  return {
    type: 'SET_SHOW_FAVOURITE',
    val
  }
}
export function addMovieToList(movie) {
  return {
    type: ADD_MOVIE_TO_LIST,
    movie
  };
}

export function handleMovieSearch(movie) {
  const url = `http://www.omdbapi.com/?i=tt3896198&apikey=bf0ce77a&t=${movie}`;
  return function (dispatch) {
    fetch(url)
      .then(response => response.json())
      .then(movie => {
        dispatch(addMovieSearchResult(movie));
      })
  }

}
export function addMovieSearchResult(movie) {
  return {
    type: ADD_SEARCH_RESULTS,
    movie
  }
}