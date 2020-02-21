import Moviedb from "../api/themoviedb";
const KEY = "6927c1ab550d3f2a3d3a6c00289d3daf";

export const fetchMovies = () => async dispatch => {
  const response = await Moviedb.get(`/trending/movie/week?api_key=${KEY}`);
  // console.log(response.data.results);
  dispatch({ type: "FETCH_MOVIES", payload: response.data.results });
};

export const fetchUpcomingMovies = () => async dispatch => {
  const response = await Moviedb.get(`/movie/upcoming?api_key=${KEY}`);
  // console.log(response.data.results);
  dispatch({ type: "FETCH_UPCOMING", payload: response.data.results });
};

export const fetchMovie = id => async dispatch => {
  const response = await Moviedb.get(`movie/${id}?api_key=${KEY}`);
  dispatch({ type: "FETCH_MOVIE", payload: response.data });
};
